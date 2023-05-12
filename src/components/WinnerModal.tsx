import { Players } from '../types'
import './winnerModal.css'

interface Props {
  winner: undefined | Players
  bet: number
  resetGame: () => void
}

export function WinnerModal ({ winner, bet, resetGame }: Props) {
  if (winner == null) return null
  console.log(winner)
  const winnerText = `Ganó la suma de  $${bet}`
  return (
    <section className='winner'>
      <div className='text'>

        <header className='win'>
          {winner.name}
        </header>
        <h2>{winnerText} </h2>
        <footer onClick={resetGame}>
          <button>Volver al inicio</button>
        </footer>
      </div>
    </section>

  )
}
