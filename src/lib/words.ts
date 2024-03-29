import { ENABLE_ARCHIVED_GAMES } from "../constants/settings";
import {
  NOT_CONTAINED_MESSAGE,
  WRONG_SPOT_MESSAGE,
} from "../constants/strings";
import { VALID_GUESSES6 } from "../constants/validGuesses";
import { getWords } from "../constants/wordlist";
import { getToday } from "./dateutils";
import { CharStatus } from "./enums/status";
import { getGuessStatuses } from "./statuses";
import {
  addDays,
  differenceInDays,
  formatISO,
  parseISO,
  startOfDay,
} from "date-fns";
import { default as GraphemeSplitter } from "grapheme-splitter";
import queryString from "query-string";

export const firstGameDate = new Date(2022, 0);
export const periodInDays = 1;

const buildWordList =
  (words: string[], validGuesses: string[]) => (word: string) => {
    const lowerCasedWord = localeAwareLowerCase(word);

    return (
      words.includes(lowerCasedWord) || validGuesses.includes(lowerCasedWord)
    );
  };

export const isWordInWordList = buildWordList(
  getWords(localStorage.complexity),
  VALID_GUESSES6
);

export const isWinningWord = (word: string) => {
  return solution === word;
};

// build a set of previously revealed letters - present and correct
// guess must use correct letters in that space and any other revealed letters
// also check if all revealed instances of a letter are used (i.e. two C's)
export const findFirstUnusedReveal = (word: string, guesses: string[]) => {
  if (guesses.length === 0) {
    return false;
  }

  const lettersLeftArray = new Array<string>();
  const guess = guesses[guesses.length - 1];
  const statuses = getGuessStatuses(solution, guess, VALID_GUESSES6);
  const splitWord = unicodeSplit(word);
  const splitGuess = unicodeSplit(guess);

  for (let i = 0; i < splitGuess.length; i++) {
    if (
      statuses[i] === CharStatus.Correct ||
      statuses[i] === CharStatus.Present
    ) {
      lettersLeftArray.push(splitGuess[i]);
    }
    if (statuses[i] === CharStatus.Correct && splitWord[i] !== splitGuess[i]) {
      return WRONG_SPOT_MESSAGE(splitGuess[i], i + 1);
    }
  }

  // check for the first unused letter, taking duplicate letters
  // into account - see issue #198
  let n;
  for (const letter of splitWord) {
    n = lettersLeftArray.indexOf(letter);
    if (n !== -1) {
      lettersLeftArray.splice(n, 1);
    }
  }

  if (lettersLeftArray.length > 0) {
    return NOT_CONTAINED_MESSAGE(lettersLeftArray[0]);
  }
  return false;
};

export const unicodeSplit = (word: string) => {
  return new GraphemeSplitter().splitGraphemes(word);
};

export const unicodeLength = (word: string) => {
  return unicodeSplit(word).length;
};

export const localeAwareLowerCase = (text: string) => {
  return import.meta.env.VITE_LOCALE_STRING
    ? text.toLocaleLowerCase(import.meta.env.VITE_LOCALE_STRING)
    : text.toLowerCase();
};

export const localeAwareUpperCase = (text: string) => {
  return import.meta.env.VITE_LOCALE_STRING
    ? text.toLocaleUpperCase(import.meta.env.VITE_LOCALE_STRING)
    : text.toUpperCase();
};

export const getLastGameDate = (today: Date) => {
  const t = startOfDay(today);
  const daysSinceLastGame = differenceInDays(firstGameDate, t) % periodInDays;
  return addDays(t, -daysSinceLastGame);
};

export const getNextGameDate = (today: Date) => {
  return addDays(getLastGameDate(today), periodInDays);
};

export const isValidGameDate = (date: Date) => {
  if (date < firstGameDate || date > getToday()) {
    return false;
  }

  return differenceInDays(firstGameDate, date) % periodInDays === 0;
};

export const getIndex = (gameDate: Date) => {
  let start = firstGameDate;
  let index = -1;
  do {
    index++;
    start = addDays(start, periodInDays);
  } while (start <= gameDate);

  return index;
};

export const getDay = (index: number, words: string[]) => {
  if (index < 0) {
    throw new Error("Invalid index");
  }

  return localeAwareUpperCase(words[index % words.length]);
};

export const getRandomWord = (words: string[]) => {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  return localeAwareUpperCase(randomWord);
};

// function createArray(n: number): Array<number> {
//   let arr = new Array<number>(n);
//   return arr;
// }

export const spaces = (n: number): string => {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += " ";
  }

  return result;
};

export const merge = (given: string, guess: string): string => {
  let result = "";

  for (let i = 0; i < given.length; i++) {
    result +=
      given[i] === " " && guess[i] >= "A" && guess[i] <= "Z"
        ? guess[i]
        : given[i];
  }
  return result;
};

export const getSolution = (gameDate: Date) => {
  const index = getIndex(gameDate);
  if (!localStorage.complexity) {
    localStorage.complexity = "Elementary";
  }
  const wordOfTheDay = getRandomWord(getWords(localStorage.complexity));
  localStorage.given = wordOfTheDay[0] + spaces(wordOfTheDay.length - 1);
  localStorage.out = JSON.stringify({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  return {
    solution: wordOfTheDay,
    solutionGameDate: gameDate,
    solutionIndex: index,
    given: localStorage.given,
    // tomorrow: nextGameDate.valueOf(),
  };
};

export const getGameDate = () => {
  if (getIsLatestGame()) {
    return getToday();
  }

  const parsed = queryString.parse(window.location.search);
  try {
    const d = startOfDay(parseISO(parsed.d!.toString()));
    if (d >= getToday() || d < firstGameDate) {
      setGameDate(getToday());
    }
    return d;
  } catch (e) {
    console.error(e);
    return getToday();
  }
};

export const setGameDate = (d: Date) => {
  try {
    if (d < getToday()) {
      window.location.href = "/?d=" + formatISO(d, { representation: "date" });
      return;
    }
  } catch (e) {
    console.error(e);
  }
  window.location.href = "/";
};

export const getIsLatestGame = () => {
  if (!ENABLE_ARCHIVED_GAMES) {
    return true;
  }
  const parsed = queryString.parse(window.location.search);
  return parsed === null || !("d" in parsed);
};

export const { solution, solutionGameDate, solutionIndex, given } = getSolution(
  getGameDate()
);
