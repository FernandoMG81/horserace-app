import { Card } from '../types'
import './RestOfCards.css'
import { Square } from './Square'

interface Props {
  currentCard: Card | null
}

export const RestOfCards = ({ currentCard }: Props) => {
  if (currentCard === undefined) return null

  return (
    <section className='restcards'>
      <Square
        isVisible
        isPlayed
        src={currentCard?.url}
      />
    </section>
  )
}
