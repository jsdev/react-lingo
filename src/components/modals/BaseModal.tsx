import { Dialog, Transition } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

type Props = {
  title: string
  children: React.ReactNode
  isOpen: boolean
  handleClose: () => void
};

export const dialogStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1em',
};

export const BaseModal = ({ title, children, isOpen, handleClose }: Props) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        aria-labelledby="dialog-title"
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="full-screen-dialog flex min-h-full items-center justify-center py-10 px-4 text-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 min-h-screen bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="full-screen-dialog-content inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-gray-800 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
              <div>
                <div className="text-center">
                  <div style={dialogStyles}>
                    <Dialog.Title
                      id="dialog-title"
                      className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
                    >
                      {title}
                    </Dialog.Title>
                    <button
                      aria-label={`Close ${title} Dialog`}
                      onClick={handleClose}
                    >
                      <XCircleIcon className="h-6 w-6 dark:stroke-white" />
                    </button>
                  </div>
                  <div className="mt-2 text-gray-900 dark:text-gray-100">{children}</div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
