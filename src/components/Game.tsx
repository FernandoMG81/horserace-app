import { useEffect, useState } from 'react'
import { Square } from './Square'
import './game.css'
import { cards as cardsService } from '../services/cards'
import { Card, HorsePosition, Players, Settings } from '../types'
import { WinnerModal } from './WinnerModal'
import { RestOfCards } from './RestOfCards'

interface Props {
  settings: Settings
  setPlayGame: () => void
}

export const Game = ({ settings, setPlayGame }: Props) => {

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
  const [winner, setWinner] = useState<Players>()

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

  }, [settings])

  useEffect(() => {
    checkCardOnBoard()
    checkWinner()
  }, [horsesPosition])

  const getRandomCard = (): number => {
    return Math.floor(Math.random() * 48) + 1
  }

  const getCardsForBoard = (): Card[] => {
    const newArray: Card[] = []
    const copyOfDeck: Card[] = [...deck]

    // Agregar los dos jokers al principio porque no se usan
    newArray.push({ id: 49, number: 'Comodin', url: 'empty.png', played: false, suit: 'comodin' },
      { id: 50, number: 'Comodin', url: 'empty.png', played: false, suit: 'comodin' })

    while (newArray.length < settings.length) {
      const cardId = getRandomCard()
      const cartToCheck = copyOfDeck.find(item => item.id === cardId)
      const index = copyOfDeck.findIndex(obj => obj.id === cardId)

      if (index !== -1 && cartToCheck !== undefined) {
        copyOfDeck.splice(index, 1)
        newArray.push(cartToCheck)
      }

    }

    setDeck(shuffleArray(copyOfDeck))
    return newArray
  }

  const shuffleArray = (array: Card[]) => {
    function random () {
      return Math.random() - 0.5
    }
    array.sort(random)

    return array
  }

  const checkWinner = () => {
    for (const [prop, value] of Object.entries(horsesPosition)) {
      if (value === 0) {
        const winnerName = settings.players.find(value => value.horse === prop)
        if (winnerName != null) {
          setWinner({ name: winnerName?.name, horse: winnerName?.horse })
          console.log(`El ganador es ${prop}`)
        }
      }
    }
  }

  const checkCardOnBoard = () => {
    const { bastos, copas, espadas, oros } = horsesPosition
    const cardsLength = cardsOnBoard.length
    if (bastos < cardsLength - 1 &&
        copas < cardsLength - 1 &&
        espadas < cardsLength - 1 &&
        oros < cardsLength - 1) {
      const newArray = [...cardsOnBoard]
      const card = newArray.pop()
      setTimeout(() => {
        moveCardFromBoard(card.suit, 'backward')
      }, 500)
      setCardsOnBoard(newArray)
    }
  }

  const moveCardFromBoard = (suit: string, direction: 'forward' | 'backward') => {
    const newBoard = structuredClone(board)
    const value = direction === 'forward' ? 1 : -1

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
  }

  const handleOnClick = () => {
    const newCurrentIndexCard = currentIndexCard + 1
    setTimeout(() => {
      moveCardFromBoard(deck[newCurrentIndexCard].suit, 'forward')
    }, 1000)
    setCurrentIndexCard(newCurrentIndexCard)
  }

  return (
    <main className='board'>
      <h2>{settings.bet}</h2>
      <section className='game'>
        {board?.map((lane, laneIndex) => (
          <section key={`${laneIndex}`} className='clue'>
            {lane.map((square, squareIndex) => (
              <Square
                key={`${laneIndex}-${squareIndex}`}
                isActive={square}
                src={`11-de-${Object.keys(horsesPosition)[laneIndex]}.png`}
              >
                {String(square)}
              </Square>
            ))}
          </section>
        ))}
        <section className='cards-on-board'>
          {
            cardsOnBoard.map((card, i) => {
              return (
                <Square
                  key={card.id}
                  isActive
                  src={card.url}
                >
                  {String(card.suit)}
                  {String(i)}
                </Square>
              )
            })
          }
        </section>
      </section>
      <section className='players'>
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
      <section className='rest-cards'>
        {
          deck[currentIndexCard]?.suit
        }
      </section>
      <button onClick={handleOnClick}>
        Sacar carta
      </button>
      <RestOfCards
        currentCard={deck[currentIndexCard]}
      />
      <WinnerModal
        winner={winner}
        resetGame={() => console.log('reinicio')}
        bet={settings.bet}
      />
    </main>
  )
}
