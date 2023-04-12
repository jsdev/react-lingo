import { BackspaceIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import { DELETE_TEXT, ENTER_TEXT } from '../../constants/strings'
import { getStatuses } from '../../lib/statuses'
import { localeAwareUpperCase } from '../../lib/words'
import { Key } from './Key'
import { KeyboardProps } from './KeyboardProps'

export const KeyboardAlphabet = ({
    onChar,
    onDelete,
    onEnter,
    solution,
    guesses,
    isRevealing,
    isWordInWordList,
}: KeyboardProps) => {
    const charStatuses = getStatuses(solution, guesses, isWordInWordList)

    const onClick = (value: string) => {
        if (value === 'ENTER') {
            onEnter()
        } else if (value === 'DELETE') {
            onDelete()
        } else {
            onChar(value)
        }
    }

    useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            if (e.code === 'Enter') {
                onEnter()
            } else if (e.code === 'Backspace') {
                onDelete()
            } else {
                const key = localeAwareUpperCase(e.key)
                // TODO: check this test if the range works with non-english letters
                if (key.length === 1 && key >= 'A' && key <= 'Z') {
                    onChar(key)
                }
            }
        }
        window.addEventListener('keyup', listener)
        return () => {
            window.removeEventListener('keyup', listener)
        }
    }, [onEnter, onDelete, onChar])

    return (
        <>
            <div className="mb-1 flex justify-center">
                {['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'].map((key) => (
                    <Key
                        value={key}
                        key={key}
                        onClick={onClick}
                        status={charStatuses[key]}
                        isRevealing={isRevealing}
                    />
                ))}
            </div>
            <div className="mb-1 flex justify-center">
                {['N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'].map((key) => (
                    <Key
                        value={key}
                        key={key}
                        onClick={onClick}
                        status={charStatuses[key]}
                        isRevealing={isRevealing}
                    />
                ))}
            </div>
            <div className="flex justify-center">
                <Key aria-label={DELETE_TEXT} value="DELETE" onClick={onClick}>
                    <BackspaceIcon
                        className="h-6 w-6 dark:stroke-white"
                    />
                </Key>
                {['A', 'E', 'I', 'O', 'U', 'Y'].map((key) => (
                    <Key
                        value={key}
                        key={key}
                        onClick={onClick}
                        status={charStatuses[key]}
                        isRevealing={isRevealing}
                    />
                ))}
                <Key width={129} value="ENTER" onClick={onClick}>
                    {ENTER_TEXT}
                </Key>
            </div>
        </>
    )
}
