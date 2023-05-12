import './form.css'
import { Settings } from '../types'
import { useRef, useState } from 'react'

interface Props {
  setSettings: (settings: Settings) => void
}
export const Form = ({ setSettings }: Props) => {

  const [errors, setErrors] = useState([false, false, false, false])
  const betRef = useRef<HTMLInputElement>(null)
  const playerOneRef = useRef<HTMLInputElement>(null)
  const playerTwoRef = useRef<HTMLInputElement>(null)
  const playerThreeRef = useRef<HTMLInputElement>(null)
  const playerFourRef = useRef<HTMLInputElement>(null)

  function hasNoErrors (array: boolean[]) {
    for (const value of array) {
      if (value) {
        return false
      }
    }
    return true
  }

  const capitalize = (word: string) => {
    const lower = word.toLowerCase()
    return word.charAt(0).toUpperCase() + lower.slice(1)
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const newSettings: Settings = {
      bet: 100,
      players: [],
      length: 6
    }
    const newErrors = [...errors]

    if (playerOneRef.current == null || playerOneRef.current?.value === '') {
      newErrors[0] = true
    } else {
      newErrors[0] = false
      const value = capitalize(playerOneRef.current.value)
      newSettings.players.push({ horse: 'espadas', name: value })
    }
    if (playerTwoRef.current === null || playerTwoRef.current?.value === '') {
      newErrors[1] = true
    } else {
      newErrors[1] = false
      const value = capitalize(playerTwoRef.current.value)
      newSettings.players.push({ horse: 'bastos', name: value })
    }
    if (playerThreeRef.current === null || playerThreeRef.current?.value === '') {
      newErrors[2] = true
    } else {
      newErrors[2] = false
      const value = capitalize(playerThreeRef.current.value)
      newSettings.players.push({ horse: 'copas', name: value })
    }
    if (playerFourRef.current === null || playerFourRef.current?.value === '') {
      newErrors[3] = true
    } else {
      newErrors[3] = false
      const value = capitalize(playerFourRef.current.value)
      newSettings.players.push({ horse: 'oros', name: value })
    }
    setErrors(newErrors)

    if (hasNoErrors(newErrors)) {
      setSettings(newSettings)
    }
    console.log(newSettings)
    console.log(newErrors)
  }

  return (
    <form action='submit' className='form' onSubmit={handleSubmit}>
      <div>
        <input
          type='number'
          name='bet'
          placeholder='Apuesta'
          ref={betRef}

        />
      </div>

      <div className='input'>
        <label htmlFor='player 1'>
          <img src='/src/assets/cards/11-de-espadas.png' alt='image of horse of swords' />
        </label>
        <input
          type='text'
          id='player 1'
          placeholder='Jugador 1'
          ref={playerOneRef}
          className={`${errors[0] ? 'error' : ''}`}
        />
      </div>

      <div className='input'>
        <label htmlFor='player 2'>
          <img src='/src/assets/cards/11-de-bastos.png' alt='image of horse of clubs' />
        </label>
        <input
          type='text'
          id='player 2'
          placeholder='Jugador 2'
          ref={playerTwoRef}
          className={`${errors[1] ? 'error' : ''}`}
        />
      </div>

      <div className='input'>
        <label htmlFor='player 3'>
          <img src='/src/assets/cards/11-de-copas.png' alt='image of horse of cups' />
        </label>
        <input
          type='text'
          id='player 3'
          placeholder='Jugador 3'
          ref={playerThreeRef}
          className={`${errors[2] ? 'error' : ''}`}
        />
      </div>

      <div className='input'>
        <label htmlFor='player 4'>
          <img src='/src/assets/cards/11-de-oros.png' alt='image of horse of coins' />
        </label>
        <input
          type='text'
          id='player 4'
          placeholder='Jugador 4'
          ref={playerFourRef}
          className={`${errors[3] ? 'error' : ''}`}
        />
      </div>
      <button>Comenzar</button>
    </form>
  )
}
