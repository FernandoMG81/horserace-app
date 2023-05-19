import './form.css'
import { Settings } from '../types'
import { useRef, useState } from 'react'
import { DEFAULT_BET, DEFAULT_LENGTH_OF_RACE } from '../constants'
import { capitalize } from '../logic/functions'

interface Props {
  setSettings: (settings: Settings) => void
}

type Errors = {
  playerOne: boolean
  playerTwo: boolean
  playerThree: boolean
  playerFour: boolean
}

export const Form = ({ setSettings }: Props) => {

  const [errors, setErrors] = useState({
    playerOne: false,
    playerTwo: false,
    playerThree: false,
    playerFour: false
  })

  const betRef = useRef<HTMLInputElement>(null)
  const playerRefs = {
    playerOne: useRef<HTMLInputElement>(null),
    playerTwo: useRef<HTMLInputElement>(null),
    playerThree: useRef<HTMLInputElement>(null),
    playerFour: useRef<HTMLInputElement>(null)
  }

  const hasErrors = (errors: Errors): boolean => {
    return Object.values(errors).some((error) => error)
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const { playerOne, playerTwo, playerThree, playerFour } = playerRefs
    const newSettings: Settings = {
      bet: DEFAULT_BET,
      players: [],
      length: DEFAULT_LENGTH_OF_RACE
    }
    const newErrors = { ...errors }

    if (betRef.current !== null && betRef.current.value === '') {
      betRef.current.value = String(DEFAULT_BET)
    } else {
      newSettings.bet = Number(betRef.current?.value)
    }

    if (playerOne.current == null || playerOne.current?.value === '') {
      newErrors.playerOne = true
    } else {
      newErrors.playerOne = false
      const value = capitalize(playerOne.current.value)
      newSettings.players.push({ horse: 'espadas', name: value })
    }
    if (playerTwo.current === null || playerTwo.current?.value === '') {
      newErrors.playerTwo = true
    } else {
      newErrors.playerTwo = false
      const value = capitalize(playerTwo.current.value)
      newSettings.players.push({ horse: 'bastos', name: value })
    }
    if (playerThree.current === null || playerThree.current?.value === '') {
      newErrors.playerThree = true
    } else {
      newErrors.playerThree = false
      const value = capitalize(playerThree.current.value)
      newSettings.players.push({ horse: 'copas', name: value })
    }
    if (playerFour.current === null || playerFour.current?.value === '') {
      newErrors.playerFour = true
    } else {
      newErrors.playerFour = false
      const value = capitalize(playerFour.current.value)
      newSettings.players.push({ horse: 'oros', name: value })
    }
    setErrors(newErrors)

    if (!hasErrors(newErrors)) {
      setSettings(newSettings)
    }
  }

  const handleBlur = (player: 'playerOne' | 'playerTwo' | 'playerThree' | 'playerFour') => {
    if (playerRefs[player].current?.value !== '') {
      const newErrors: Errors = { ...errors }
      newErrors[player] = false
      setErrors(newErrors)
    }
  }

  return (
    <form action='submit' className='form' onSubmit={handleSubmit}>
      <div>
        <input
          className='input-bet'
          type='number'
          name='bet'
          placeholder='Apuesta'
          ref={betRef}
        />
      </div>

      <div className='input-name'>
        <label htmlFor='player 1'>
          <img src='/src/images/cards/11-de-espadas.webp' alt='image of horse of swords' />
        </label>
        <input
          type='text'
          id='player 1'
          placeholder={`${errors.playerOne ? 'Ingrese un nombre' : 'Jugador 1'}`}
          ref={playerRefs.playerOne}
          className={`${errors.playerOne ? 'error' : ''}`}
          onBlur={() => handleBlur('playerOne')}
        />
      </div>

      <div className='input-name'>
        <label htmlFor='player 2'>
          <img src='/src/images/cards/11-de-bastos.webp' alt='image of horse of clubs' />
        </label>
        <input
          type='text'
          id='player 2'
          placeholder={`${errors.playerTwo ? 'Ingrese un nombre' : 'Jugador 2'}`}
          ref={playerRefs.playerTwo}
          className={`${errors.playerTwo ? 'error' : ''}`}
          onBlur={() => handleBlur('playerTwo')}
        />
      </div>

      <div className='input-name'>
        <label htmlFor='player 3'>
          <img src='/src/images/cards/11-de-copas.webp' alt='image of horse of cups' />
        </label>
        <input
          type='text'
          id='player 3'
          placeholder={`${errors.playerThree ? 'Ingrese un nombre' : 'Jugador 3'}`}
          ref={playerRefs.playerThree}
          className={`${errors.playerThree ? 'error' : ''}`}
          onBlur={() => handleBlur('playerThree')}
        />
      </div>

      <div className='input-name'>
        <label htmlFor='player 4'>
          <img src='/src/images/cards/11-de-oros.webp' alt='image of horse of coins' />
        </label>
        <input
          type='text'
          id='player 4'
          placeholder={`${errors.playerFour ? 'Ingrese un nombre' : 'Jugador 4'}`}
          ref={playerRefs.playerFour}
          className={`${errors.playerFour ? 'error' : ''}`}
          onBlur={() => handleBlur('playerFour')}
        />
      </div>

      <button className='btn'>
        COMENZAR
        <div className='dot' />
      </button>

    </form>
  )
}
