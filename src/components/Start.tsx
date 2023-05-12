import { useState } from 'react'
import useToggle from '../hook/useToggle'
import { Settings } from '../types'
import { Button } from './Button'
import { Form } from './Form'
import { Game } from './Game'
import { Header } from './Header'
import './start.css'
export const Start = () => {

  const [playGame, setPlayGame] = useToggle()
  const [settings, setSettings] = useState<Settings | null>(null)

  return (
    <main>

      <Header />
      {
        !playGame
          ? <Button handleOnClick={setPlayGame}>JUGAR</Button>
          : null
      }
      {
        playGame && settings === null
          ? <Form setSettings={setSettings} />
          : null
      }
      {
        playGame && settings !== null
          ? <Game
              settings={settings}
              setPlayGame={setPlayGame}
            />
          : null
      }
    </main>
  )
}
