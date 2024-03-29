import { ENABLE_ARCHIVED_GAMES } from "../../constants/settings";
import { GAME_TITLE } from "../../constants/strings";
import {
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

type Props = {
  setIsInfoModalOpen: (value: boolean) => void;
  setIsHintModalOpen: (value: boolean) => void;
  setIsStatsModalOpen: (value: boolean) => void;
  setIsDatePickerModalOpen: (value: boolean) => void;
  setIsSettingsModalOpen: (value: boolean) => void;
};

export const Navbar = ({
  setIsInfoModalOpen,
  setIsHintModalOpen,
  setIsStatsModalOpen,
  setIsDatePickerModalOpen,
  setIsSettingsModalOpen,
}: Props) => {
  return (
    <nav className="navbar">
      <div className="navbar-content px-5 short:h-auto">
        <div className="flex">
          <button
            aria-label="How to Play"
            onClick={() => setIsInfoModalOpen(true)}
          >
            <InformationCircleIcon className="h-6 w-6 dark:stroke-white" />
          </button>
          <button aria-label="Hints" onClick={() => setIsHintModalOpen(true)}>
            <LightBulbIcon className="ml-3 h-6 w-6 dark:stroke-white" />
          </button>
          {ENABLE_ARCHIVED_GAMES && (
            <button
              aria-label="Archived Games"
              onClick={() => setIsDatePickerModalOpen(true)}
            >
              <CalendarIcon className="ml-3 h-6 w-6 dark:stroke-white" />
            </button>
          )}
        </div>
        <h1 className="text-xl font-bold dark:text-white">{GAME_TITLE}</h1>
        <div className="right-icons">
          <button
            aria-label="Statistics"
            className="mr-3"
            onClick={() => setIsStatsModalOpen(true)}
          >
            <ChartBarIcon className="h-6 w-6 dark:stroke-white" />
          </button>
          <button
            aria-label="Settings"
            onClick={() => setIsSettingsModalOpen(true)}
          >
            <CogIcon className="h-6 w-6 dark:stroke-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};
