export interface Card {
  id: number
  number: string
  url: string
  played: boolean
  suit: 'espadas' | 'bastos' | 'oros' | 'copas' | 'comodin'
}

export interface Players {
  name: string
  horse: 'espadas' | 'bastos' | 'oros' | 'copas'
}

export interface HorsePosition {
  espadas: number
  bastos: number
  oros: number
  copas: number
}

export interface Settings {
  players: Players[]
  bet: number
  length: number
}
