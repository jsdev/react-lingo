import {
  // HARD_MODE_DESCRIPTION,
  DARK_MODE_DESCRIPTION,
  HIGH_CONTRAST_MODE_DESCRIPTION,
} from '../../constants/strings'
import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'
import React, { ChangeEvent } from "react";

export const complexityOptions = [
  { value: "Elementary", label: "🐝 HONEYBEE" },
  { value: "Middle School", label: "🦋 BUTTERFLY" },
  { value: "High School", label: "🦊 FOX" }
];

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
  keyboardMode: string
  handleKeyboardMode: (event: ChangeEvent<HTMLSelectElement>) => void
}

const selectStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
  alignItems: 'center',
  minHeight: 60,
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  // isHardMode,
  // handleHardMode,
  isDarkMode,
  handleDarkMode,
  isHighContrastMode,
  handleHighContrastMode,
  complexityMode,
  handleComplexityMode,
  keyboardMode,
  handleKeyboardMode,
}: Props) => {
  return (
    <BaseModal title="Settings" isOpen={isOpen} handleClose={handleClose}>
      <div className="mt-2 flex flex-col divide-y">
        <div style={selectStyles} className="mt-2 text-left text-gray-500 dark:text-gray-300">
          <label htmlFor="level" className="leading-none">Level</label>
          <select
            id="level"
            className="bg-transparent dark:text-gray-300"
            value={complexityMode || 'Elementary'}
            onChange={handleComplexityMode}
          >
            <option value="Elementary">🐝 HONEYBEE</option>
            <option value="Middle School">🦋 BUTTERFLY</option>
            <option value="High School">🦊 FOX</option>
          </select>
        </div>
        <div style={selectStyles} className="text-left text-gray-500 dark:text-gray-300">
          <label htmlFor="keyboard" className="leading-none">Keyboard</label>
          <select
            id="keyboard"
            className="bg-transparent dark:text-gray-300"
            value={keyboardMode || 'ALPHABET'}
            onChange={handleKeyboardMode}
          >
            <option value="ALPHABET">ALPHABET</option>
            <option value="VOWELS">CONSONANTS + VOWELS</option>
            <option value="QWERTY">QWERTY</option>
          </select>
        </div>
        {/* <SettingsToggle
          settingName="Hard Mode"
          flag={isHardMode}
          handleFlag={handleHardMode}
          description={HARD_MODE_DESCRIPTION}
        /> */}
        <SettingsToggle
          settingName="Dark Mode"
          flag={isDarkMode}
          handleFlag={handleDarkMode}
          description={DARK_MODE_DESCRIPTION}
        />
        <SettingsToggle
          settingName="High Contrast Mode"
          flag={isHighContrastMode}
          handleFlag={handleHighContrastMode}
          description={HIGH_CONTRAST_MODE_DESCRIPTION}
        />
      </div>
    </BaseModal >
  )
}
