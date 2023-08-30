import { DELETE_TEXT } from "../../constants/strings";
import { getStatuses } from "../../lib/statuses";
import { localeAwareUpperCase } from "../../lib/words";
import { Key } from "./Key";
import { KeyboardProps, keyboardRowStyles } from "./KeyboardProps";
import { BackspaceIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

export const KeyboardVowels = ({
  onChar,
  onDelete,
  onEnter,
  solution,
  guesses,
  isRevealing,
  isWordInWordList,
}: KeyboardProps) => {
  const charStatuses = getStatuses(solution, guesses, isWordInWordList);

  const onClick = (value: string) => {
    if (value === "ENTER") {
      onEnter();
    } else if (value === "DELETE") {
      onDelete();
    } else {
      onChar(value);
    }
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === "Enter") {
        onEnter();
      } else if (e.code === "Backspace") {
        onDelete();
      } else {
        const key = localeAwareUpperCase(e.key);
        // TODO: check this test if the range works with non-english letters
        if (key.length === 1 && key >= "A" && key <= "Z") {
          onChar(key);
        }
      }
    };
    window.addEventListener("keyup", listener);
    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, [onEnter, onDelete, onChar]);

  return (
    <>
      <div
        className="mb-1 flex justify-center grid grid-cols-9"
        style={keyboardRowStyles}
      >
        {["B", "C", "D", "F", "G", "H", "J", "K", "L"].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div
        className="mb-1 flex justify-center grid grid-cols-9"
        style={keyboardRowStyles}
      >
        {["M", "N", "P", "Q", "R", "S", "T", "V", "W"].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div
        className="mb-1 flex justify-center grid grid-cols-9"
        style={keyboardRowStyles}
      >
        {["X", "Y", "Z"].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        <Key aria-label={DELETE_TEXT} value="DELETE" onClick={onClick}>
          <BackspaceIcon className="h-6 w-6 dark:stroke-white" />
        </Key>
        {["A", "E", "I", "O", "U"].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
    </>
  );
};
