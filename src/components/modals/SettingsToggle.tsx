import classnames from 'classnames'

type Props = {
  settingName: string
  flag: boolean
  handleFlag: Function
  description?: string
}

export const SettingsToggle = ({
  settingName,
  flag,
  handleFlag,
  description,
}: Props) => {
  const toggleHolder = classnames(
    'w-14 h-8 flex shrink-0 items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out',
    {
      'bg-green-400': flag,
    }
  )
  const toggleButton = classnames(
    'bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out',
    {
      'translate-x-6': flag,
    }
  )

  const camelCase = (str: string): string =>
    str.replace(/ (.)/g, (match) => match.toUpperCase()).replace(/ /g, '')

  return (
    <>
      <label className="switch-card items-center py-3 text-left dark:text-gray-100">
        <div>
          {settingName}
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-300">
            {description}
          </p>
        </div>
        <div className={toggleHolder}>
          <input
            data-id={camelCase(settingName)}
            onClick={() => handleFlag(!flag)}
            type="checkbox"
            className={toggleButton}
          />
        </div>
      </label>
    </>
  )
}
