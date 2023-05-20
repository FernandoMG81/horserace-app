import { useEffect, useRef, useState } from 'react'
import { Square } from './Square'
import './game.css'
import { cards as cardsService, descatedCards } from '../services/cards'
import { Card, HorsePosition, Players, Settings } from '../types'
import { WinnerModal } from './WinnerModal'
import { RestOfCards } from './RestOfCards'
import { getRandomCard, shuffleArray } from '../logic/functions'
import confetti from 'canvas-confetti'
import CountdownModal from './Countdown'
import useToggle from '../hook/useToggle'
import useSound from 'use-sound'
import gameSound from '/src/sounds/game_song.ogg'
import winSound from '/src/sounds/win.ogg'

// import caballoDeEspadas from '/public/images/cards/11-de-espadas.webp';
// import caballoDeBastos from '/public/images/cards/11-de-basto.webp';
// import caballoDeOros from '/public/images/cards/11-de-oro.webp';
// import caballoDeCopas from '/public/images/cards/11-de-copas.webp';
import comodin from '../images/cards/empty.webp'


interface Props {
  settings: Settings
  setSettings: (settings: Settings | null) => void
  setPlayGame: () => void
}

export const Game = ({ settings, setSettings, setPlayGame }: Props) => {

  const [playSoundGame, { stop: stopSoundGame }] = useSound(gameSound)
  const [winSoundGame] = useSound(winSound)

  const [newPlayers, setNewPlayers] = useState<Players[]>([])
  const [deck, setDeck] = useState<Card[]>(cardsService)
  const [cardsOnBoard, setCardsOnBoard] = useState<Card[]>([])
  const [board, setBoard] = useState<boolean[][] | null>(null)
  const [currentIndexCard, setCurrentIndexCard] = useState<number>(-1)
  const [horsesPosition, setHorsesPosition] = useState<HorsePosition>({
    espadas: settings.length,
    bastos: settings.length,
    copas: settings.length,
    oros: settings.length
  })
  const [winner, setWinner] = useState<Players | null>(null)
  const [isPlaying, setIsPlaying] = useToggle()
  const [cardPlayedIndex, setCardPlayedIndex] = useState<number>(settings.length)
  const [showCountdown, setShowCountdown] = useToggle()
  const containerRef = useRef(null)

  const handleCountdownFinish = () => {
    setShowCountdown()
    setIsPlaying()
  }

  // Init settings
  useEffect(() => {
    const lane = Array(settings.length).fill(false)
    const newBoard = [[...lane, true], [...lane, true], [...lane, true], [...lane, true]]
    // Obtener el set de cartas
    setBoard(newBoard)
    // Seteamos los jugadores
    setNewPlayers(settings.players)
    // al azar quitamos las cartas de la mesa
    setCardsOnBoard(getCardsForBoard())
    // Mezclamos las cartas restantes
    setShowCountdown()
  }, [settings])

  useEffect(() => {
    if (isPlaying && winner === null) {
      const cardToGoBack = checkIfCardHasToGoBack()
      if (cardToGoBack) {
        const newArray = [...cardsOnBoard]
        const card = newArray[cardPlayedIndex - 1]
        if (card != null) {
          moveCardFromBoard(card.suit, 'backward')
          newArray[cardPlayedIndex - 1].played = true
          setCardPlayedIndex(prev => prev - 1)
          setCardsOnBoard(newArray)
        }
      } else {
        setTimeout(() => {
          const newCurrentIndexCard = currentIndexCard + 1
          setCurrentIndexCard(newCurrentIndexCard)
          moveCardFromBoard(deck[newCurrentIndexCard].suit, 'forward')
        }, 1000)

      }
      handleScroll(containerRef.current)
    }
  }, [board, isPlaying])

  const handleScroll = (ref: HTMLElement | null, top: boolean = false) => {
    if (ref !== null) {
      let distance
      if(top){
        distance = 0
      }else{
        
        const calc = Math.min(...Object.values(horsesPosition))
        const cardDimension = ref.offsetHeight / settings.length
        distance = cardDimension * calc + cardDimension
      }
      window.scrollTo({
        top: distance,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  const getCardsForBoard = (): Card[] => {
    const newArray: Card[] = []
    const copyOfDeck: Card[] = [...deck]

    // Agregar los dos jokers al principio porque no se usan
    newArray.push({ id: 49, number: 'Comodin', url: comodin, played: false, suit: 'comodin' },
    { id: 50, number: 'Comodin', url: comodin, played: false, suit: 'comodin' })

    while (newArray.length < settings.length) {
      const cardId = getRandomCard()
      const cartToCheck = copyOfDeck.find(item => item.id === cardId)
      const index = copyOfDeck.findIndex(obj => obj.id === cardId)

      if (index !== -1 && cartToCheck !== undefined) {
        copyOfDeck.splice(index, 1)
        cartToCheck.played = false
        newArray.push(cartToCheck)
      }

    }

    setDeck(shuffleArray(copyOfDeck))
    return newArray
  }

  const checkWinner = () => {
    for (const [prop, value] of Object.entries(horsesPosition)) {
      if (value === 0) {
        const winnerName = settings.players.find(value => value.horse === prop)
        if (winnerName != null) {
          return { name: winnerName?.name, horse: winnerName?.horse }
        }
      }
    }
    return null
  }

  const checkIfCardHasToGoBack = () => {
    const { bastos, copas, espadas, oros } = horsesPosition
    const cardsLength = cardPlayedIndex
    if (bastos < cardsLength - 1 &&
        copas < cardsLength - 1 &&
        espadas < cardsLength - 1 &&
        oros < cardsLength - 1) {
      return true
    }
    return false
  }

  const moveCardFromBoard = (suit: string, direction: 'forward' | 'backward') => {
    const winner = checkWinner()
    if (winner !== null) {
      stopSoundGame()
      setIsPlaying()
      setWinner(winner)
      winSoundGame()
      handleScroll(containerRef.current, true)
      confetti({
        particleCount: 100
      })
      return
    }
    setTimeout(() => {

      const newBoard = structuredClone(board)
      const value = direction === 'forward' ? 1 : -1
      if (newBoard === null) return
      switch (suit) {
        case 'espadas':
          newBoard[0][horsesPosition.espadas] = false
          newBoard[0][horsesPosition.espadas - value] = true
          setBoard(newBoard)
          setHorsesPosition(prevState => {
            return {
              ...prevState,
              espadas: prevState.espadas - value
            }
          })
          break

        case 'bastos':
          newBoard[1][horsesPosition.bastos] = false
          newBoard[1][horsesPosition.bastos - value] = true
          setBoard(newBoard)
          setHorsesPosition(prevState => {
            return {
              ...prevState,
              bastos: prevState.bastos - value
            }
          })
          break

        case 'copas':
          newBoard[2][horsesPosition.copas] = false
          newBoard[2][horsesPosition.copas - value] = true
          setBoard(newBoard)
          setHorsesPosition(prevState => {
            return {
              ...prevState,
              copas: prevState.copas - value
            }
          })
          break

        case 'oros':
          newBoard[3][horsesPosition.oros] = false
          newBoard[3][horsesPosition.oros - value] = true
          setBoard(newBoard)
          setHorsesPosition(prevState => {
            return {
              ...prevState,
              oros: prevState.oros - value
            }
          })
          break
      }
    }, 1000)

  }

  // const handleOnClick = async () => {
  //   const newCurrentIndexCard = currentIndexCard + 1
  //   await moveCardFromBoard(deck[newCurrentIndexCard].suit, 'forward')
  //   setCurrentIndexCard(newCurrentIndexCard)
  // }

  const resetGame = () => {
    setSettings(null)
    setDeck(cardsService)
    setPlayGame()
  }

  return (
    <main className='board' ref={containerRef}>
      <div>
        {showCountdown && <>{playSoundGame()}<CountdownModal onFinish={handleCountdownFinish} /></>}
      </div>
      <section><h2 className='h2'>APUESTA: ${settings.bet}</h2></section>
      <section className='game'>
        {board?.map((lane, laneIndex) => (
          <section key={`${laneIndex}`} className='clue'>
            {lane.map((square, squareIndex) => (
              <Square
                key={`${laneIndex}-${squareIndex}`}
                isVisible={square}
                isPlayed={false}
                src={descatedCards
                    .find(card => card.number
                       === Object.keys(horsesPosition)[laneIndex])?.url}
              />
            ))}
          </section>
        ))}
        <section className='cards-on-board'>
          {
            cardsOnBoard.map((card) => {
              return (
                <Square
                  key={card.id}
                  isVisible={card.played}
                  isPlayed={!card.played}
                  src={card.url}
                />
              )
            })
          }
        </section>
      </section>
      <section className='players pills'>
        {
          newPlayers.map((player) => {
            return (
              <div key={player.horse}>
                <p>{player.name}</p>
              </div>
            )
          })
        }
      </section>
      {/* <button onClick={handleOnClick}>
        Sacar carta
      </button> */}
      <RestOfCards
        currentCard={deck[currentIndexCard]}
      />
      <WinnerModal
        winner={winner}
        resetGame={resetGame}
        bet={settings.bet}
      />
    </main>
  )
}
