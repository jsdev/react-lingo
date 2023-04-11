import { SelectValue } from 'react-tailwindcss-select/dist/components/type';
import {
  HARD_MODE_DESCRIPTION,
  HIGH_CONTRAST_MODE_DESCRIPTION,
} from '../../constants/strings'
import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'
import React, { ChangeEvent } from "react";
import Select from "react-tailwindcss-select";

export const complexityOptions = [
  { value: "Elementary", label: "🐝 HONEYBEE" },
  { value: "Middle School", label: "🦋 BUTTERFLY" },
  { value: "High School", label: "🦊 FOX" }
];

const getComplexity = (): SelectValue =>
  localStorage.complexity

const setComplexity = (complexity: SelectValue): void => { localStorage.complexity = complexity }


type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
  isHighContrastMode: boolean
  handleHighContrastMode: Function
  complexityMode: string
  handleComplexityMode: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isHardMode,
  handleHardMode,
  isDarkMode,
  handleDarkMode,
  isHighContrastMode,
  handleHighContrastMode,
  complexityMode,
  handleComplexityMode,
}: Props) => {
  return (
    <BaseModal title="Settings" isOpen={isOpen} handleClose={handleClose}>
      <div className="mt-2 flex flex-col divide-y">
        <select
          className="bg-transparent dark:text-gray-300"
          value={complexityMode || 'Elementary'}
          onChange={handleComplexityMode}
        >
          <option value="Elementary">🐝 HONEYBEE</option>
          <option value="Middle School">🦋 BUTTERFLY</option>
          <option value="High School">🦊 FOX</option>
        </select>
        <SettingsToggle
          settingName="Hard Mode"
          flag={isHardMode}
          handleFlag={handleHardMode}
          description={HARD_MODE_DESCRIPTION}
        />
        <SettingsToggle
          settingName="Dark Mode"
          flag={isDarkMode}
          handleFlag={handleDarkMode}
        />
        <SettingsToggle
          settingName="High Contrast Mode"
          flag={isHighContrastMode}
          handleFlag={handleHighContrastMode}
          description={HIGH_CONTRAST_MODE_DESCRIPTION}
        />
      </div>
    </BaseModal>
  )
}
