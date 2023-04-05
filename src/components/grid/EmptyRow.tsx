import { solution } from '../../lib/words'
import { Cell } from './Cell'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(solution.length))
  const given = localStorage.given
  const chars = given.split('')

  return (
    <div className="mb-1 flex justify-center">
      {emptyCells.map((_, i) => (
        <Cell
          key={i}
          value={
            chars[i] && chars[i] !== '*' ? chars[i].toUpperCase() : undefined
          }
        />
      ))}
    </div>
  )
}
