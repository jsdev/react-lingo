import { MAX_CHALLENGES } from '../../constants/settings'
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'
import { FeedbackRow } from './FeedbackRow'
import { HardenedCurrentRow } from './HardenedCurrentRow'

type Props = {
  solution: string
  hint: string
  guesses: string[]
  currentGuess: string
  isRevealing?: boolean
  currentRowClassName: string
  isHardMode?: boolean
  isFeedbackMode?: boolean
}

export const Grid = ({
  solution,
  hint,
  guesses,
  currentGuess,
  isRevealing,
  currentRowClassName,
  isHardMode,
  isFeedbackMode,
}: Props) => {
  const empties =
    guesses.length < MAX_CHALLENGES - 1
      ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.length))
      : []

  return (
    <>
      {isFeedbackMode ?
        <>
          <FeedbackRow
            guess={currentGuess}
            className={currentRowClassName}
          />
          <div className="flex mt-2 ml-auto mr-auto justify-between mb-3 dark:text-gray-300">only exact matches will show</div>
          <div className="flex ml-auto mr-auto justify-between mb-3 dark:text-gray-300">{hint}</div>
        </> :
        guesses.map((guess, i) => (
          <CompletedRow
            key={i}
            solution={solution}
            guess={guess}
            isRevealing={isRevealing && guesses.length - 1 === i}
          />
        ))}
      {isFeedbackMode ? '' : guesses.length < MAX_CHALLENGES && (
        isHardMode ?
          <HardenedCurrentRow
            guess={currentGuess}
            className={currentRowClassName}
          /> :
          <CurrentRow
            guess={currentGuess}
            className={currentRowClassName}
          />
      )}
      {isFeedbackMode ? '' : empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </>
  )
}
