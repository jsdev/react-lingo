import './App.css'
import { ClockIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'
import { default as GraphemeSplitter } from 'grapheme-splitter'
import { useEffect, useState } from 'react'
import Div100vh from 'react-div-100vh'

import { AlertContainer } from './components/alerts/AlertContainer'
import { Grid } from './components/grid/Grid'
import { DatePickerModal } from './components/modals/DatePickerModal'
import { InfoModal } from './components/modals/InfoModal'
import { MigrateStatsModal } from './components/modals/MigrateStatsModal'
import { SettingsModal, complexityOptions } from './components/modals/SettingsModal'
import { StatsModal } from './components/modals/StatsModal'
import { Navbar } from './components/navbar/Navbar'
import {
  DATE_LOCALE,
  DISCOURAGE_INAPP_BROWSERS,
  LONG_ALERT_TIME_MS,
  MAX_CHALLENGES,
  REVEAL_TIME_MS,
  WELCOME_INFO_MODAL_MS,
} from './constants/settings'
import {
  CORRECT_WORD_MESSAGE,
  DISCOURAGE_INAPP_BROWSER_TEXT,
  GAME_COPIED_MESSAGE,
  HARD_MODE_ALERT_MESSAGE,
  // INVALID_WORD,
  // NOT_ENOUGH_LETTERS_MESSAGE,
  SHARE_FAILURE_TEXT,
  WIN_MESSAGES,
} from './constants/strings'
import { useAlert } from './context/AlertContext'
import { isInAppBrowser } from './lib/browser'
import {
  getStoredIsHighContrastMode,
  loadGameStateFromLocalStorage,
  saveGameStateToLocalStorage,
  setStoredIsHighContrastMode,
  setStoredComplexityMode,
  getStoredComplexityMode,
  getStoredKeyboardMode,
  setStoredKeyboardMode
} from './lib/localStorage'
import { addStatsForCompletedGame, loadStats } from './lib/stats'
import {
  // findFirstUnusedReveal,
  getGameDate,
  getIsLatestGame,
  isWinningWord,
  isWordInWordList,
  merge,
  setGameDate,
  solution,
  solutionGameDate,
  unicodeLength,
} from './lib/words'
import { possibilities, alphabet } from './constants/validGuesses'
import { KeyboardAlphabet } from './components/keyboard/KeyboardAlphabet'
import { KeyboardQWERTY } from './components/keyboard/KeyboardQwerty'
import { KeyboardVowels } from './components/keyboard/KeyboardVowels'
import { KeyboardProps } from './components/keyboard/KeyboardProps'

const Keyboards: any = {
  'ALPHABET': KeyboardAlphabet,
  'VOWELS': KeyboardVowels,
  'QWERTY': KeyboardQWERTY,
}

function App() {
  const isLatestGame = getIsLatestGame()
  const gameDate = getGameDate()
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  const [isFeedbackMode, setIsFeedbackMode] = useState(
    !!localStorage.getItem('feedbackMode')
  )
  const [isHardMode, setIsHardMode] = useState(
    localStorage.getItem('gameMode')
      ? localStorage.getItem('gameMode') === 'hard'
      : false
  )

  const { showError: showErrorAlert, showSuccess: showSuccessAlert } =
    useAlert()
  const defaultHardGuess = localStorage.given
  const [currentGuess, setCurrentGuess] = useState(isHardMode ? defaultHardGuess : '')
  const [isGameWon, setIsGameWon] = useState(false)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false)
  const [isDatePickerModalOpen, setIsDatePickerModalOpen] = useState(false)
  const [isMigrateStatsModalOpen, setIsMigrateStatsModalOpen] = useState(false)
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)
  const [
    currentRowClass,
    //setCurrentRowClass
  ] = useState('')
  const [isGameLost, setIsGameLost] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme')
      ? localStorage.getItem('theme') === 'dark'
      : prefersDarkMode
        ? true
        : false
  )
  const [complexityMode, setComplexitytMode] = useState(
    getStoredComplexityMode() || 'Elementary'
  )

  const [keyboardMode, setKeyboardMode] = useState(
    getStoredKeyboardMode() || 'VOWELS'
  )

  const [isHighContrastMode, setIsHighContrastMode] = useState(
    getStoredIsHighContrastMode()
  )
  const [isRevealing, setIsRevealing] = useState(false)
  const [guesses, setGuesses] = useState<string[]>(() => {
    const loaded = loadGameStateFromLocalStorage(isLatestGame)
    if (loaded?.solution !== solution) {
      return []
    }
    const gameWasWon = loaded.guesses.includes(solution)
    if (gameWasWon) {
      setIsGameWon(true)
    }
    if (loaded.guesses.length === MAX_CHALLENGES && !gameWasWon) {
      setIsGameLost(true)
      showErrorAlert(CORRECT_WORD_MESSAGE(solution), {
        persist: true,
      })
    }
    return loaded.guesses
  })

  const [stats, setStats] = useState(() => loadStats())

  useEffect(() => {
    // if no game state on load,
    // show the user the how-to info modal
    if (!loadGameStateFromLocalStorage(true)) {
      setTimeout(() => {
        setIsInfoModalOpen(true)
      }, WELCOME_INFO_MODAL_MS)
    }
  })

  useEffect(() => {
    DISCOURAGE_INAPP_BROWSERS &&
      isInAppBrowser() &&
      showErrorAlert(DISCOURAGE_INAPP_BROWSER_TEXT, {
        persist: false,
        durationMs: 7000,
      })
  }, [showErrorAlert])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isHighContrastMode) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
  }, [isDarkMode, isHighContrastMode])

  const handleDarkMode = (isDark: boolean) => {
    setIsDarkMode(isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  const handleHardMode = (isHard: boolean) => {
    if (guesses.length === 0 || localStorage.getItem('gameMode') === 'hard') {
      setIsHardMode(isHard)
      localStorage.setItem('gameMode', isHard ? 'hard' : 'normal')
    } else {
      showErrorAlert(HARD_MODE_ALERT_MESSAGE)
    }
  }

  const handleFeedbackMode = (isFeedbackMode: boolean) => {
    if (localStorage.getItem('feedbackMode')) {
      delete localStorage.feedbackMode
    } else {
      setIsFeedbackMode(isFeedbackMode)
      localStorage.setItem('feedbackMode', 'true')
    }
  }

  const handleHighContrastMode = (isHighContrast: boolean) => {
    setIsHighContrastMode(isHighContrast)
    setStoredIsHighContrastMode(isHighContrast)
  }

  const handleComplexityMode = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setComplexitytMode(event.target.value)
    setStoredComplexityMode(event.target.value)
  }

  const handleKeyboardMode = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setKeyboardMode(event.target.value)
    setStoredKeyboardMode(event.target.value)
  }

  const handleNewGame = () => {
    delete localStorage.solution
    window.location.reload()
  }

  // const clearCurrentRowClass = () => {
  //   setCurrentRowClass('')
  // }

  useEffect(() => {
    saveGameStateToLocalStorage(getIsLatestGame(), { guesses, solution })
  }, [guesses])

  useEffect(() => {
    if (isGameWon) {
      const winMessage =
        WIN_MESSAGES[Math.floor(Math.random() * WIN_MESSAGES.length)]
      const delayMs = REVEAL_TIME_MS * solution.length

      showSuccessAlert(winMessage, {
        delayMs,
        onClose: () => setIsStatsModalOpen(true),
      })
    }

    if (isGameLost) {
      setTimeout(() => {
        setIsStatsModalOpen(true)
      }, (solution.length + 1) * REVEAL_TIME_MS)
    }
  }, [isGameWon, isGameLost, showSuccessAlert])

  const onCharLetter = (value: string) => {
    const given = localStorage.given
    const guess = isHardMode ? merge(given, currentGuess).replace(' ', value) : currentGuess + value;
    const splitGiven = given.split('');
    if (
      unicodeLength(guess) <= solution.length &&
      guesses.length < MAX_CHALLENGES &&
      !isGameWon
    ) {
      setCurrentGuess(guess)
      for (let i = 0; i < solution.length; i++) {
        if (guess[i] === solution[i]) splitGiven[i] = solution[i]
      }
      localStorage.given = splitGiven.join('')
    }
    if (solution === localStorage.given) setIsGameWon(true)
  }

  const onChar = (value: string) => {
    const given = localStorage.given
    const guess = isHardMode ? merge(given, currentGuess).replace(' ', value) : currentGuess + value;
    if (
      unicodeLength(guess) <= solution.length &&
      guesses.length < MAX_CHALLENGES &&
      !isGameWon
    ) {
      setCurrentGuess(guess)
    }

    if (keyboardMode !== 'QWERTY' && guess.length === solution.length) {
      setTimeout(onEnter, 2000)
    }
  }

  const doNothing = (): void => {
  }

  const onDelete = () => {
    if (isHardMode) {
      const given = localStorage.given
      const guess = currentGuess.split('');
      for (let i = solution.length - 1; i >= 0; i--) {
        if (currentGuess[i] !== ' ' && given[i] !== currentGuess[i]) {
          guess[i] = ' '
          setCurrentGuess(guess.join(''))

          return
        }
      }
    } else {
      setCurrentGuess(
        new GraphemeSplitter().splitGraphemes(currentGuess).slice(0, -1).join('')
      )
    }
  }

  const onEnter = () => {
    if (isGameWon || isGameLost || isFeedbackMode) {
      return
    }

    const guess = document!.querySelector('[data-current]')?.textContent!

    if (!(unicodeLength(guess) === solution.length)) {
      return
    }

    if (guess.indexOf(' ') >= 0) {
      return
    }

    // if (!isWordInWordList(guess)) {
    //   console.log(currentGuess)
    //   setCurrentRowClass('jiggle')
    //   // setIsGameLost(true);

    //   showErrorAlert(INVALID_WORD, {
    //     onClose: clearCurrentRowClass,
    //   })
    // }

    // enforce hard mode - all guesses must contain all previously revealed letters
    // if (isHardMode) {
    //   const firstMissingReveal = findFirstUnusedReveal(currentGuess, guesses)
    //   if (firstMissingReveal) {
    //     setCurrentRowClass('jiggle')
    //     return showErrorAlert(firstMissingReveal, {
    //       onClose: clearCurrentRowClass,
    //     })
    //   }
    // }

    // if (isHardMode) {
    //   if (guess.length === solution.length) {
    //     setIsRevealing(true)
    //   }
    // } else {
    //   setIsRevealing(true)
    // }

    const winningWord = isWinningWord(guess)

    if (
      unicodeLength(guess) === solution.length &&
      guesses.length < MAX_CHALLENGES &&
      !isGameWon
    ) {
      setGuesses([...guesses, guess])
      setCurrentGuess(isHardMode ? localStorage.given : '')

      if (winningWord) {
        if (isLatestGame) {
          setStats(addStatsForCompletedGame(stats, guesses.length))
        }
        return setIsGameWon(true)
      }

      if (guesses.length === MAX_CHALLENGES - 1) {
        if (isLatestGame) {
          setStats(addStatsForCompletedGame(stats, guesses.length + 1))
        }
        setIsGameLost(true)
        showErrorAlert(CORRECT_WORD_MESSAGE(solution), {
          persist: true,
          delayMs: REVEAL_TIME_MS * solution.length + 1,
        })
      }
      setIsRevealing(true)
      // turn this back off after all
      // chars have been revealed
      setTimeout(() => {
        setIsRevealing(false)
      }, REVEAL_TIME_MS * solution.length)

    }
  }

  const complexity = complexityOptions
    .filter(o => o.value === localStorage.complexity)
    .map(o => o.label)

  const getText = (o: Element) => o.textContent!.toLowerCase()
  const absent: Element[] = Array.from(document.querySelectorAll('button.absent'))
  const present: Element[] = Array.from(document.querySelectorAll('button.present'))
  const correct: Element[] = Array.from(document.querySelectorAll('button.correct'))
  const given = localStorage.given.toLowerCase().split('');
  const possibleWords: string[] = alphabet[given[0] as keyof typeof alphabet]
  const possibleGuesses = possibilities(
    possibleWords,
    absent.map(getText).join(''),
    JSON.parse(localStorage.out),
    given,
    present.concat(correct).map(getText))

  const probability = (1 / (possibleGuesses.length) * 100).toFixed(2)
  const statStyles = {
    width: 350
  }

  const onCharType = isFeedbackMode ? onCharLetter : onChar
  const onEnterType = isFeedbackMode ? doNothing : onEnter

  const Keyboard: any = Keyboards[keyboardMode]

  return (
    <Div100vh>
      <div className="flex h-full flex-col">
        <Navbar
          setIsInfoModalOpen={setIsInfoModalOpen}
          setIsStatsModalOpen={setIsStatsModalOpen}
          setIsDatePickerModalOpen={setIsDatePickerModalOpen}
          setIsSettingsModalOpen={setIsSettingsModalOpen}
        />

        {!isLatestGame && (

          <div className="flex items-center justify-center">
            <ClockIcon className="h-6 w-6 stroke-gray-600 dark:stroke-gray-300" />
            <p className="text-base text-gray-600 dark:text-gray-300">
              {format(gameDate, 'd MMMM yyyy', { locale: DATE_LOCALE })}
            </p>
          </div>
        )}

        <div className="mx-auto flex w-full grow flex-col px-1 pt-2 pb-8 sm:px-6 md:max-w-7xl lg:px-8 short:pb-2 short:pt-2">
          <div className="flex grow flex-col justify-center pb-6 short:pb-2">
            <div style={statStyles} className='flex ml-auto mr-auto justify-between mb-3 dark:text-gray-300'>
              <span>LEVEL: {complexity}</span><span>ODDS: {probability}%</span>
            </div>
            <Grid
              solution={solution}
              guesses={guesses}
              isFeedbackMode={isFeedbackMode}
              isHardMode={isHardMode}
              currentGuess={currentGuess}
              isRevealing={isRevealing}
              currentRowClassName={currentRowClass}
            />
          </div>
          <center>
            <Keyboard
              onChar={onCharType}
              onDelete={onDelete}
              onEnter={onEnterType}
              solution={solution}
              guesses={guesses}
              isWordInWordList={isWordInWordList}
              isRevealing={isRevealing}
            />
          </center>
          <InfoModal
            isOpen={isInfoModalOpen}
            handleClose={() => setIsInfoModalOpen(false)}
          />
          <StatsModal
            isOpen={isStatsModalOpen}
            handleClose={() => {
              setIsStatsModalOpen(false)
              if (isGameLost || (isGameWon && isFeedbackMode)) {
                handleNewGame()
              }
            }}
            solution={solution}
            guesses={guesses}
            gameStats={stats}
            isLatestGame={isLatestGame}
            isGameLost={isGameLost}
            isGameWon={isGameWon}
            handleShareToClipboard={() => showSuccessAlert(GAME_COPIED_MESSAGE)}
            handleShareFailure={() =>
              showErrorAlert(SHARE_FAILURE_TEXT, {
                durationMs: LONG_ALERT_TIME_MS,
              })
            }
            handleMigrateStatsButton={() => {
              setIsStatsModalOpen(false)
              setIsMigrateStatsModalOpen(true)
            }}
            handleNewGame={handleNewGame}
            isHardMode={isHardMode}
            isDarkMode={isDarkMode}
            isHighContrastMode={isHighContrastMode}
            numberOfGuessesMade={guesses.length}
          />
          <DatePickerModal
            isOpen={isDatePickerModalOpen}
            initialDate={solutionGameDate}
            handleSelectDate={(d) => {
              setIsDatePickerModalOpen(false)
              setGameDate(d)
            }}
            handleClose={() => setIsDatePickerModalOpen(false)}
          />
          <MigrateStatsModal
            isOpen={isMigrateStatsModalOpen}
            handleClose={() => setIsMigrateStatsModalOpen(false)}
          />
          <SettingsModal
            isOpen={isSettingsModalOpen}
            handleClose={() => setIsSettingsModalOpen(false)}
            isFeedbackMode={isFeedbackMode}
            handleFeedbackMode={handleFeedbackMode}
            isHardMode={isHardMode}
            handleHardMode={handleHardMode}
            isDarkMode={isDarkMode}
            handleDarkMode={handleDarkMode}
            isHighContrastMode={isHighContrastMode}
            handleHighContrastMode={handleHighContrastMode}
            complexityMode={complexityMode}
            handleComplexityMode={handleComplexityMode}
            keyboardMode={keyboardMode}
            handleKeyboardMode={handleKeyboardMode}
          />
          <AlertContainer />
        </div>
      </div>
    </Div100vh>
  )
}

export default App
