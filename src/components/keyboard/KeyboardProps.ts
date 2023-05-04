export type KeyboardProps = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  solution: string
  guesses: string[]
  isRevealing?: boolean
  isWordInWordList: (word: string) => boolean
};

export const keyboardRowStyles = {
  minWidth: 350,
  maxWidth: 600,
};
