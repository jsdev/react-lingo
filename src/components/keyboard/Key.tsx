import { REVEAL_TIME_MS } from "../../constants/settings";
import { CharStatus } from "../../lib/enums/status";
import { getStoredIsHighContrastMode } from "../../lib/localStorage";
import { solution } from "../../lib/words";
import classnames from "classnames";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  value: string;
  width?: number;
  status?: CharStatus;
  onClick: (value: string) => void;
  isRevealing?: boolean;
};

export const Key = ({
  children,
  status,
  value,
  onClick,
  isRevealing,
}: Props) => {
  const keyDelayMs = REVEAL_TIME_MS * solution.length;
  const isHighContrast = getStoredIsHighContrastMode();

  const classes = classnames(
    "xxshort:h-8 xxshort:w-8 xxshort:text-xxs xshort:w-10 xshort:h-10 flex short:h-12 h-12 items-center justify-center rounded mx-0.5 text-xs font-bold select-none dark:text-white",
    {
      "transition ease-in-out": isRevealing,
      "bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 active:bg-slate-400 disabled:bg-transparent disabled:hover:bg-transparent":
        !status,
      "bg-slate-400 dark:bg-slate-800 text-white absent":
        status === CharStatus.Absent,
      "bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white correct":
        status === CharStatus.Correct && isHighContrast,
      "bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white present":
        status === CharStatus.Present && isHighContrast,
      "bg-green-500 hover:bg-green-600 active:bg-green-700 text-white correct":
        status === CharStatus.Correct && !isHighContrast,
      "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white present":
        status === CharStatus.Present && !isHighContrast,
    }
  );

  const styles = {
    transitionDelay: isRevealing ? `${keyDelayMs}ms` : "unset",
    fontSize: "1em",
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value);
    event.currentTarget.blur();
  };

  return (
    <button
      style={styles}
      aria-label={`${value}${status ? " " + status : ""}`}
      className={classes}
      onClick={handleClick}
      disabled={value === ""}
    >
      {children || value}
    </button>
  );
};
