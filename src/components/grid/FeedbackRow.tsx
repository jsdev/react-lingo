import { getLetterRevealStatus } from "../../lib/statuses";
import { merge, solution, unicodeSplit } from "../../lib/words";
import { HardenedCell } from "./HardenedCell";

type Props = {
  guess: string;
  className: string;
};

export const FeedbackRow = ({ guess, className }: Props) => {
  const given = localStorage.given;
  const mergeGuess = merge(given, guess);
  const statuses = getLetterRevealStatus(solution, mergeGuess); // change to merge for instant feedback
  const splitGuess = unicodeSplit(mergeGuess);
  const classes = `flex justify-center mb-1 ${className}`;

  const getFirstBlank = (str: string) => str.indexOf(" ");

  return (
    <div className={classes} data-current>
      {splitGuess.map((letter, i) => (
        <HardenedCell
          key={i}
          value={letter}
          status={statuses[i]}
          border={getFirstBlank(mergeGuess) === i ? "3px" : "1px"}
        />
      ))}
    </div>
  );
};
