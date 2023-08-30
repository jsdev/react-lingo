import { REVEAL_TIME_MS } from "../../constants/settings";
import { CharStatus } from "../../lib/enums/status";
import { getStoredIsHighContrastMode } from "../../lib/localStorage";
import classnames from "classnames";

type Props = {
  value?: string;
  status?: CharStatus;
  isRevealing?: boolean;
  isCompleted?: boolean;
  position?: number;
  opacity?: number;
};

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
  opacity = 1,
}: Props) => {
  const isFilled = value && !isCompleted;
  const shouldReveal = isRevealing && isCompleted;
  const animationDelay = `${position * REVEAL_TIME_MS}ms`;
  const isHighContrast = getStoredIsHighContrastMode();

  const classes = classnames(
    "xxshort:w-11 xxshort:h-11 short:text-2xl short:w-12 short:h-12 w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white",
    {
      "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600":
        !status,
      "border-black dark:border-slate-100": value && !status,
      "shadowed bg-slate-400 dark:bg-slate-700 dark:text-white border-slate-400 dark:border-slate-700":
        status === CharStatus.Absent,
      "shadowed bg-red-500 text-white border-red-700":
        status === CharStatus.Invalid,
      "shadowed bg-orange-500 text-white border-orange-500":
        status === CharStatus.Correct && isHighContrast,
      "shadowed bg-cyan-500 text-white border-cyan-500":
        status === CharStatus.Present && isHighContrast,
      "shadowed bg-green-500 text-white border-green-500":
        status === CharStatus.Correct && !isHighContrast,
      "shadowed bg-yellow-500 text-white border-yellow-500":
        status === CharStatus.Present && !isHighContrast,
      "cell-fill-animation": isFilled,
      "cell-reveal": shouldReveal,
    }
  );

  return (
    <div className={classes} style={{ animationDelay, opacity }}>
      <div className="letter-container" style={{ animationDelay }}>
        {value}
      </div>
    </div>
  );
};
