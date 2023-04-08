import { getRevealStatus } from '../../lib/statuses'
import { solution, unicodeSplit } from '../../lib/words'
import { Cell } from './Cell'

type Props = {
  guess: string
  className: string
}

export const CurrentRow = ({ guess, className }: Props) => {
  const given = localStorage.given
  const slice = guess.length - given.length;
  const chars = given.slice(slice).split('')
  const statuses =  getRevealStatus(given, guess)
  const emptyStatuses = getRevealStatus(solution.slice(slice), given.slice(slice))
  const splitGuess = unicodeSplit(guess)
  const emptyCells = Array.from(Array(solution.length - splitGuess.length))
  const classes = `flex justify-center mb-1 ${className}`

  return (
    <div className={classes}>
      <div className={classes}>
        {splitGuess.map((letter, i) => (
          <Cell
            key={i}
            value={letter}
            status={statuses[i]}
          />
        ))}
        {emptyCells.map((_, i) => (
          <Cell
            key={i}
            value={
              chars[i] && chars[i] !== '*' ? chars[i].toUpperCase() : undefined
            }
            opacity={0.6}
            status={emptyStatuses[i]}
          />
        ))}
      </div>
    </div>
  )
}
