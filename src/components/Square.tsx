import './square.css'

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
          ? <img className={className} src={`/src/assets/cards/${src ?? ''}`} alt={src} />
          : isPlayed
            ? <img className={className} src='/src/assets/cards/back.png' alt={src} />
            : <div className={className} />
      }

    </div>
  )
}
