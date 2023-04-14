import { getRevealStatus } from '../../lib/statuses'
import { unicodeSplit } from '../../lib/words'
import { HardenedCell } from './HardenedCell'

type Props = {
    guess: string
    className: string
}

export const HardenedCurrentRow = ({ guess, className }: Props) => {
    const given = localStorage.given
    const statuses = getRevealStatus(given, guess)
    const splitGuess = unicodeSplit(guess)
    const classes = `flex justify-center mb-1 ${className}`

    const getFirstBlank = (guess: string) =>
        guess.indexOf(' ');

    return (
        <div className={classes} data-current>
            {splitGuess.map((letter, i) => (
                <HardenedCell
                    key={i}
                    value={letter}
                    status={statuses[i]}
                    border={getFirstBlank(guess) === i ? '3px' : '1px'}
                />
            ))}
        </div>
    )
}
