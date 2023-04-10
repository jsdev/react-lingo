import {
  CalendarIcon,
  ChartBarIcon,
  BackspaceIcon,
  CogIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'

import { ENABLE_ARCHIVED_GAMES } from '../../constants/settings'
import { GAME_TITLE } from '../../constants/strings'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsDatePickerModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsDatePickerModalOpen,
  setIsSettingsModalOpen,
}: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5 short:h-auto">
        <div className="flex">
          <button
            onClick={() => setIsInfoModalOpen(true)}>
            <InformationCircleIcon
              className="h-6 w-6 cursor-pointer dark:stroke-white"
            />
          </button>
          {ENABLE_ARCHIVED_GAMES && (
            <button
              onClick={() => setIsDatePickerModalOpen(true)}>
              <CalendarIcon
                className="ml-3 h-6 w-6 cursor-pointer dark:stroke-white"
              />
            </button>
          )}
        </div>
        <p className="text-xl font-bold dark:text-white">{GAME_TITLE}</p>
        <div className="right-icons">
          <button
            className="mr-3"
            onClick={() => setIsStatsModalOpen(true)}>
            <ChartBarIcon
              className="h-6 w-6 cursor-pointer dark:stroke-white"
            />
          </button>
          <button
            onClick={() => setIsSettingsModalOpen(true)}>
            <BackspaceIcon
              className="h-6 w-6 cursor-pointer dark:stroke-white"
            />
          </button>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
