import { possibilities, alphabet } from '../../constants/validGuesses'
import { MAX_CHALLENGES } from '../../constants/settings'
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'

type Props = {
  solution: string
  guesses: string[]
  currentGuess: string
  isRevealing?: boolean
  currentRowClassName: string
}

export const Grid = ({
  solution,
  guesses,
  currentGuess,
  isRevealing,
  currentRowClassName,
}: Props) => {
  const getText = (o: Element) => o.textContent!.toLowerCase()
  const absent: Element[] = Array.from(document.querySelectorAll('button[absent]'))
  const present: Element[] = Array.from(document.querySelectorAll('button[present]'))
  const correct: Element[] = Array.from(document.querySelectorAll('button[correct]'))
  const given = localStorage.given.toLowerCase().split('');
  const possibleWords : string[] = alphabet[given[0] as keyof typeof alphabet];
  const possibleGuesses = possibilities(
    possibleWords,
    absent.map(getText).join(''),
    JSON.parse(localStorage.out),
    given,
    present.concat(correct).map(getText))
  const empties =
    guesses.length < MAX_CHALLENGES - 1
      ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.length))
      : []

  return (
    <>
      {guesses.map((guess, i) => (
        <CompletedRow
          key={i}
          solution={solution}
          guess={guess}
          isRevealing={isRevealing && guesses.length - 1 === i}
        />
      ))}
      {guesses.length < MAX_CHALLENGES && (
        <CurrentRow guess={currentGuess} className={currentRowClassName} />
      )}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
      <center className="dark:text-white">
        Possibilities: {possibleGuesses.length}/{possibleWords.length}
        </center>
    </>
  )
}
