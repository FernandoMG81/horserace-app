import './square.css'
import backCard from '../images/cards/back.webp'
interface Props {
  isVisible: boolean
  isPlayed: boolean
  src?: string | undefined
}

export const Square = ({ isVisible, isPlayed, src }: Props) => {
  const className = `square ${isVisible ? 'is-visible' : ''}`

  return (
    <div className='border'>
      {
        isVisible
          ? <img className={className} src={src} alt={src} />
          : isPlayed
            ? <img className={className} src={backCard} alt={src} />
            : <div className={className} />
      }

    </div>
  )
}
