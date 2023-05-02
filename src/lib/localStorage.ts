const gameStateKey = 'gameState';
const archiveGameStateKey = 'archiveGameState';
const highContrastKey = 'highContrast';
const complexityKey = 'complexity';
const keyboardKey = 'keyboard';

export type StoredGameState = {
  guesses: string[]
  solution: string
};

export const saveGameStateToLocalStorage = (
  isLatestGame: boolean,
  gameState: StoredGameState,
) => {
  const key = isLatestGame ? gameStateKey : archiveGameStateKey;
  localStorage.setItem(key, JSON.stringify(gameState));
};

export const loadGameStateFromLocalStorage = (isLatestGame: boolean) => {
  const key = isLatestGame ? gameStateKey : archiveGameStateKey;
  const state = localStorage.getItem(key);
  return state ? (JSON.parse(state) as StoredGameState) : null;
};

const gameStatKey = 'gameStats';

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
};

export const saveStatsToLocalStorage = (gameStats: GameStats) => {
  localStorage.setItem(gameStatKey, JSON.stringify(gameStats));
};

export const loadStatsFromLocalStorage = () => {
  const stats = localStorage.getItem(gameStatKey);
  return stats ? (JSON.parse(stats) as GameStats) : null;
};

export const setStoredIsHighContrastMode = (bool: boolean) => {
  if (bool) {
    localStorage.setItem(highContrastKey, '1');
  } else {
    localStorage.removeItem(highContrastKey);
  }
};

export const getStoredIsHighContrastMode = () => {
  const highContrast = localStorage.getItem(highContrastKey);
  return highContrast === '1';
};

export const setStoredComplexityMode = (complexity: string) => {
  if (complexity) {
    localStorage.setItem(complexityKey, complexity);
  } else {
    localStorage.removeItem(complexityKey);
  }
};

export const setStoredKeyboardMode = (keyboard: string) => {
  if (keyboard) {
    localStorage.setItem(keyboardKey, keyboard);
  } else {
    localStorage.removeItem(keyboardKey);
  }
};

export const getStoredComplexityMode = () => {
  return localStorage.getItem(complexityKey);
};

export const getStoredKeyboardMode = () => {
  return localStorage.getItem(keyboardKey);
};
