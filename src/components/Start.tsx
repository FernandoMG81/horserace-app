import { useState } from 'react'
import { Settings } from '../types'
import { Button } from './Button'
import { Form } from './Form'
import { Game } from './Game'
import { Header } from './Header'
import { Manual } from './Manual'
import useSound from 'use-sound'
import useToggle from '../hook/useToggle'
import openSound from '/src/sounds/open_song.ogg'
import './start.css'
export const Start = () => {

  const [playGame, setPlayGame] = useToggle()
  const [settings, setSettings] = useState<Settings | null>(null)

  const [playSoundOpen, { stop: stopSoundOpen }] = useSound(openSound)

  return (
    <main className='main'>
      <Header />
      {
        !playGame
          ? <>
            <Button handleOnClick={setPlayGame}>JUGAR</Button>
            <Manual />
          </>
          : null
      }
      {
      playGame && settings === null
        ? <>
          <Form setSettings={setSettings} />
          {playSoundOpen()}
        </>
        : null
      }
      {
        playGame && settings !== null
          ? <>
            <Game
              settings={settings}
              setSettings={setSettings}
              setPlayGame={setPlayGame}
            />
            {
              stopSoundOpen()
            }
          </>
          : null
      }

    </main>
  )
}
