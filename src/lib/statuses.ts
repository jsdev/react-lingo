import { CharStatus } from './enums/status'
import { unicodeSplit } from './words'

// export type CharStatus = 'absent' | 'present' | 'correct' | 'invalid'

export const getRevealStatus = (
  solution: string,
  given: string
): CharStatus[] => {
  const charObj: CharStatus[] = []
  const splitSolution = unicodeSplit(solution)

  unicodeSplit(given).forEach((letter, i) => charObj[i] = letter === splitSolution[i] ?
    CharStatus.Correct : CharStatus.Absent
  )

  return charObj
}

export const getStatuses = (
  solution: string,
  guesses: string[],
  isWordInWordList: (word: string) => boolean,
): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}
  const splitSolution = unicodeSplit(solution)

  guesses.forEach((word) => {
    if (!isWordInWordList(word)) {
      return
    }
    unicodeSplit(word).forEach((letter, i) => {
      if (!splitSolution.includes(letter)) {
        // make status absent
        return (charObj[letter] = CharStatus.Absent)
      }

      if (letter === splitSolution[i]) {
        //make status correct
        return (charObj[letter] = CharStatus.Correct)
      }

      if (charObj[letter] !== CharStatus.Correct) {
        //make status present
        return (charObj[letter] = CharStatus.Present)
      }
    })
  })

  return charObj
}

export const getGuessStatuses = (
  solution: string,
  guess: string,
  validWords: string[]
): CharStatus[] => {
  const splitSolution = unicodeSplit(solution)
  const splitGuess = unicodeSplit(guess)

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: CharStatus[] = Array.from(Array(guess.length))
  let given = localStorage.given.split('')
  const out = JSON.parse(localStorage.out)

  if (!validWords.includes(guess.toLocaleLowerCase())) {
    splitSolution.forEach((_letter, i) => {
      statuses[i] = CharStatus.Invalid
    })

    return statuses
  }

  // handle all correct cases first
  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      statuses[i] = CharStatus.Correct
      solutionCharsTaken[i] = true
      given[i] = letter
      return
    }
  })

  localStorage.given = given.join('');

  splitGuess.forEach((letter, i) => {
    if (statuses[i]) return

    if (!splitSolution.includes(letter)) {
      // handles the absent case
      statuses[i] = CharStatus.Absent
      return
    }

    // now we are left with "present"s
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index]
    )

    if (indexOfPresentChar > -1) {
      statuses[i] = CharStatus.Present
      if (!out[i].includes(letter)) {
        out[i] += letter
      }
      solutionCharsTaken[indexOfPresentChar] = true
      return
    } else {
      statuses[i] = CharStatus.Absent
      return
    }
  })

  localStorage.out = JSON.stringify(out)

  return statuses
}
