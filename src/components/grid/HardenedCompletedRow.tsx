import { VALID_GUESSES6 } from "../../constants/validGuesses";
import { getGuessStatuses } from "../../lib/statuses";
import { unicodeSplit } from "../../lib/words";
import { HardenedCell } from "../grid/HardenedCell";

type Props = {
  solution: string;
  guess: string;
  isRevealing?: boolean;
};

export const CompletedRow = ({ solution, guess, isRevealing }: Props) => {
  const statuses = getGuessStatuses(solution, guess, VALID_GUESSES6);
  const splitGuess = unicodeSplit(guess);

  return (
    <div data-completed="true" className="mb-1 flex justify-center">
      {splitGuess.map((letter, i) => (
        <HardenedCell
          key={i}
          value={letter}
          status={statuses[i]}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
    </div>
  );
};
