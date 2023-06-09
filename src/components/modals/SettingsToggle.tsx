import classnames from 'classnames';

type Props = {
  settingName: string
  flag: boolean
  handleFlag: (bool: boolean) => void
  description?: string
};

export const SettingsToggle = ({
  settingName,
  flag,
  handleFlag,
  description,
}: Props) => {
  const toggleHolder = classnames(
    'w-14 h-8 flex shrink-0 items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out dark:bg-black-800',
    {
      'bg-green-400 dark:bg-green-800': flag,
    },
  );
  const toggleButton = classnames(
    'bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out dark:bg-gray-800',
    {
      'translate-x-6': flag,
    },
  );

  return (
    <>
      <div className="flex justify-between gap-4 py-3 items-center">
        <div className="text-left text-gray-500 dark:text-gray-300">
          <p id={settingName} className="leading-none">{settingName}</p>
          {description && (
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-300">
              {description}
            </p>
          )}
        </div>
        <button aria-labelledby={settingName} className={toggleHolder} onClick={() => handleFlag(!flag)}>
          <div className={toggleButton} />
        </button>
      </div>
    </>
  );
};
