import './square.css'

interface Props {
  children?: string[] | string
  isActive: boolean
  src?: string
}

export const Square = ({ children, isActive, src }: Props) => {
  const className = `square ${isActive ? 'is-selected' : ''}`
  console.log(src)
  return (
    <div className='border'>
      {
        isActive
          ? <img className={className} src={`/src/assets/cards/${src}`} alt={src} />
          : <div className={className}>
            {children}
          </div>
      }

    </div>
  )
}
