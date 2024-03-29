import { ENABLE_MIGRATE_STATS } from "../../constants/settings";
import {
  GUESS_DISTRIBUTION_TEXT,
  SHARE_TEXT,
  STATISTICS_TITLE,
} from "../../constants/strings";
import { GameStats } from "../../lib/localStorage";
import { shareStatus } from "../../lib/share";
import { Histogram } from "../stats/Histogram";
import { MigrationIntro } from "../stats/MigrationIntro";
import { StatBar } from "../stats/StatBar";
import { BaseModal } from "./BaseModal";
import {
  BookOpenIcon,
  PlayCircleIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  solution: string;
  guesses: string[];
  gameStats: GameStats;
  isLatestGame: boolean;
  isGameLost: boolean;
  isGameWon: boolean;
  handleShareToClipboard: () => void;
  handleShareFailure: () => void;
  handleMigrateStatsButton: () => void;
  handleNewGame: () => void;
  isHardMode: boolean;
  isDarkMode: boolean;
  isHighContrastMode: boolean;
  numberOfGuessesMade: number;
};

export const StatsModal = ({
  isOpen,
  handleClose,
  solution,
  guesses,
  gameStats,
  isLatestGame,
  isGameLost,
  isGameWon,
  handleShareToClipboard,
  handleShareFailure,
  handleMigrateStatsButton,
  handleNewGame,
  isHardMode,
  isDarkMode,
  isHighContrastMode,
  numberOfGuessesMade,
}: Props) => {
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
        {ENABLE_MIGRATE_STATS && (
          <MigrationIntro handleMigrateStatsButton={handleMigrateStatsButton} />
        )}
      </BaseModal>
    );
  }
  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
        {GUESS_DISTRIBUTION_TEXT}
      </h4>
      <Histogram
        isLatestGame={isLatestGame}
        gameStats={gameStats}
        isGameWon={isGameWon}
        numberOfGuessesMade={numberOfGuessesMade}
      />
      {(isGameLost || isGameWon) && (
        <>
          <div className="grid grid-cols-2 gap-4 items-center items-stretch justify-center text-center dark:text-white sm:mt-6">
            <button
              type="button"
              className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
              onClick={() => {
                shareStatus(
                  solution,
                  guesses,
                  isGameLost,
                  isHardMode,
                  isDarkMode,
                  isHighContrastMode,
                  handleShareToClipboard,
                  handleShareFailure
                );
              }}
            >
              <ShareIcon
                aria-hidden="true"
                className="mr-2 h-6 w-6 dark:stroke-white"
              />
              {SHARE_TEXT}
            </button>
            <button
              type="button"
              onClick={handleNewGame}
              className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
            >
              <PlayCircleIcon
                aria-label="Play"
                className="mr-2 h-6 w-6 dark:stroke-white"
              />
              New Word
            </button>
          </div>
          <a
            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
            href={"https://www.dictionary.com/browse/" + solution}
            target="_blank"
            rel="noreferrer"
          >
            <BookOpenIcon
              aria-label="definition"
              className="mr-2 h-6 w-6 dark:stroke-white"
            />
            {solution}
          </a>
        </>
      )}
    </BaseModal>
  );
};
