import './button.css'

interface Props {
  children: string
  handleOnClick?: () => void

}

export const Button = ({ children, handleOnClick }: Props) => {
  return (
    <form action='submit'>
      <div className='container'>
        <div className='btn' onClick={handleOnClick}>
          <span>{children}</span>
          <div className='dot' />
        </div>
      </div>
    </form>
  )
}
