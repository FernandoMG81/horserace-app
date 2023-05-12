import { Card } from '../types'
import './RestOfCards.css'
import { Square } from './Square'

interface Props {
  currentCard: Card | null
}

export const RestOfCards = ({ currentCard }: Props) => {

  return (
    <section className='restcards'>
      <Square
        isActive
        src={currentCard.url}
      >
        {currentCard.suit}
      </Square>

    </section>
  )
}
