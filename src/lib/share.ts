import { UAParser } from 'ua-parser-js';

import { MAX_CHALLENGES } from '../constants/settings';
import { GAME_TITLE } from '../constants/strings';
import { getGuessStatuses } from './statuses';

import { solutionIndex, unicodeSplit } from './words';
import { VALID_GUESSES6 } from '../constants/validGuesses';
import { CharStatus } from './enums/status';

const webShareApiDeviceTypes: string[] = ['mobile', 'smarttv', 'wearable'];
const parser = new UAParser();
const browser = parser.getBrowser();
const device = parser.getDevice();

export const generateEmojiGrid = (
  solution: string,
  guesses: string[],
  tiles: string[],
) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(solution, guess, VALID_GUESSES6);
      const splitGuess = unicodeSplit(guess);

      return splitGuess
        .map((_, i) => {
          switch (status[i]) {
            case CharStatus.Correct:
              return tiles[0];
            case CharStatus.Present:
              return tiles[1];
            default:
              return tiles[2];
          }
        })
        .join('');
    })
    .join('\n');
};

const attemptShare = (shareData: object) => {
  return (
    // Deliberately exclude Firefox Mobile, because its Web Share API isn't working correctly
    browser.name?.toUpperCase().indexOf('FIREFOX') === -1 &&
    webShareApiDeviceTypes.indexOf(device.type ?? '') !== -1 &&
    navigator.canShare &&
    navigator.canShare(shareData) &&
    navigator.share
  );
};

const getEmojiTiles = (isDarkMode: boolean, isHighContrastMode: boolean): string[] => {
  const tiles: string[] = [];

  tiles.push(isHighContrastMode ? '🟧' : '🟩');
  tiles.push(isHighContrastMode ? '🟦' : '🟨');
  tiles.push(isDarkMode ? '⬛' : '⬜');

  return tiles;
};

export const shareStatus = (
  solution: string,
  guesses: string[],
  lost: boolean,
  isHardMode: boolean,
  isDarkMode: boolean,
  isHighContrastMode: boolean,
  handleShareToClipboard: () => void,
  handleShareFailure: () => void,
) => {
  const textToShare =
    `${GAME_TITLE} ${solutionIndex} ${lost ? 'X' : guesses.length
    }/${MAX_CHALLENGES}${isHardMode ? ' ' : ''}\n\n` +
    generateEmojiGrid(
      solution,
      guesses,
      getEmojiTiles(isDarkMode, isHighContrastMode),
    );

  const shareData = { text: textToShare };

  let shareSuccess = false;

  try {
    if (attemptShare(shareData)) {
      navigator.share(shareData);
      shareSuccess = true;
    }
  } catch (error) {
    shareSuccess = false;
  }

  try {
    if (!shareSuccess) {
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(textToShare)
          .then(handleShareToClipboard)
          .catch(handleShareFailure);
      } else {
        handleShareFailure();
      }
    }
  } catch (error) {
    handleShareFailure();
  }
};
