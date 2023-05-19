import { Players } from '../types'
import { Button } from './Button'
import './winnerModal.css'

interface Props {
  winner: Players | null
  bet: number
  resetGame: () => void
}

export function WinnerModal ({ winner, bet, resetGame }: Props) {
  if (winner == null) return null
  const winnerText = `Ganó la suma de  $${bet}`
  return (
    <section className='winner'>
      <div className='text'>
        <header className='win'>
          {winner.name}
        </header>
        <h2>{winnerText} </h2>
        <footer onClick={resetGame}>
          <Button>REINICIAR JUEGO</Button>
        </footer>
      </div>
    </section>

  )
}
