import { CharStatus } from './enums/status'
import { getGuessStatuses } from './statuses'

const mockSolutionGetter = jest.fn()

beforeEach(() => {
  jest.mock('./words', () => ({
    ...jest.requireActual('./words'),
    get solution() {
      return mockSolutionGetter()
    },
  }))
})

describe('getGuessStatuses', () => {
  test('guess statuses', () => {
    expect(getGuessStatuses('ABCDE', 'EDCBA', ['ABCDE', 'EDCBA'])).toEqual([
      CharStatus.Present,
      CharStatus.Present,
      CharStatus.Correct,
      CharStatus.Present,
      CharStatus.Present,
    ])
    expect(getGuessStatuses('ABCDE', 'VWXYZ', ['ABCDE', 'VWXYZ'])).toEqual([
      CharStatus.Absent,
      CharStatus.Absent,
      CharStatus.Absent,
      CharStatus.Absent,
      CharStatus.Absent,
    ])
    expect(getGuessStatuses('ABCDE', 'ABCDE', ['ABCDE', 'ABCDE'])).toEqual([
      CharStatus.Correct,
      CharStatus.Correct,
      CharStatus.Correct,
      CharStatus.Correct,
      CharStatus.Correct,
    ])

    // https://github.com/cwackerfuss/react-wordle/issues/456
    expect(getGuessStatuses('BOSSY', 'SASSY', ['BOSSY', 'SASSY'])).toEqual([
      CharStatus.Absent,
      CharStatus.Absent,
      CharStatus.Correct,
      CharStatus.Correct,
      CharStatus.Correct,
    ])
  })
})
