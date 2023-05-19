import { Card } from '../types'
import asDeEspadas from '../images/cards/as-de-espadas.webp'
import dosDeEspadas from '../images/cards/2-de-espadas.webp'
import tresDeEspadas from '../images/cards/3-de-espadas.webp'
import cuatroDeEspadas from '../images/cards/4-de-espadas.webp'
import cincoDeEspadas from '../images/cards/5-de-espadas.webp'
import seisDeEspadas from '../images/cards/6-de-espadas.webp'
import sieteDeEspadas from '../images/cards/7-de-espadas.webp'
import ochoDeEspadas from '../images/cards/8-de-espadas.webp'
import nueveDeEspadas from '../images/cards/9-de-espadas.webp'
import diezDeEspadas from '../images/cards/10-de-espadas.webp'
import reyDeEspadas from '../images/cards/12-de-espadas.webp'
import asDeBasto from '../images/cards/as-de-basto.webp'
import dosDeBasto from '../images/cards/2-de-basto.webp'
import tresDeBasto from '../images/cards/3-de-basto.webp'
import cuatroDeBasto from '../images/cards/4-de-basto.webp'
import cincoDeBasto from '../images/cards/5-de-basto.webp'
import seisDeBasto from '../images/cards/6-de-basto.webp'
import sieteDeBasto from '../images/cards/7-de-basto.webp'
import ochoDeBasto from '../images/cards/8-de-basto.webp'
import nueveDeBasto from '../images/cards/9-de-basto.webp'
import diezDeBasto from '../images/cards/10-de-basto.webp'
import reyDeBasto from '../images/cards/12-de-basto.webp'
import asDeOro from '../images/cards/as-de-oro.webp'
import dosDeOro from '../images/cards/2-de-oro.webp'
import tresDeOro from '../images/cards/3-de-oro.webp'
import cuatroDeOro from '../images/cards/4-de-oro.webp'
import cincoDeOro from '../images/cards/5-de-oro.webp'
import seisDeOro from '../images/cards/6-de-oro.webp'
import sieteDeOro from '../images/cards/7-de-oro.webp'
import ochoDeOro from '../images/cards/8-de-oro.webp'
import nueveDeOro from '../images/cards/9-de-oro.webp'
import diezDeOro from '../images/cards/10-de-oro.webp'
import reyDeOro from '../images/cards/12-de-oro.webp'
import asDeCopas from '../images/cards/as-de-copas.webp'
import dosDeCopas from '../images/cards/2-de-copas.webp'
import tresDeCopas from '../images/cards/3-de-copas.webp'
import cuatroDeCopas from '../images/cards/4-de-copas.webp'
import cincoDeCopas from '../images/cards/5-de-copas.webp'
import seisDeCopas from '../images/cards/6-de-copas.webp'
import sieteDeCopas from '../images/cards/7-de-copas.webp'
import ochoDeCopas from '../images/cards/8-de-copas.webp'
import nueveDeCopas from '../images/cards/9-de-copas.webp'
import diezDeCopas from '../images/cards/10-de-copas.webp'
import reyDeCopas from '../images/cards/12-de-copas.webp'
import caballoDeEspadas from '../images/cards/11-de-espadas.webp'
import caballoDeBastos from '../images/cards/11-de-bastos.webp'
import caballoDeOros from '../images/cards/11-de-oros.webp'
import caballoDeCopas from '../images/cards/11-de-copas.webp'
import comodinRojo from '../images/cards/empty.webp'
import comodinNegro from '../images/cards/empty.webp'





export const cards: Card[] = [
  // Espadas
  { id: 1, number: 'As', url: asDeEspadas, played: false, suit: 'espadas' },
  { id: 2, number: 'Dos', url: dosDeEspadas, played: false, suit: 'espadas' },
  { id: 3, number: 'Tres', url: tresDeEspadas, played: false, suit: 'espadas' },
  { id: 4, number: 'Cuatro', url: cuatroDeEspadas, played: false, suit: 'espadas' },
  { id: 5, number: 'Cinco', url: cincoDeEspadas, played: false, suit: 'espadas' },
  { id: 6, number: 'Seis', url: seisDeEspadas, played: false, suit: 'espadas' },
  { id: 7, number: 'Siete', url: sieteDeEspadas, played: false, suit: 'espadas' },
  { id: 8, number: 'Ocho', url: ochoDeEspadas, played: false, suit: 'espadas' },
  { id: 9, number: 'Nueve', url: nueveDeEspadas, played: false, suit: 'espadas' },
  { id: 10, number: 'Diez', url: diezDeEspadas, played: false, suit: 'espadas' },
  { id: 12, number: 'Rey', url: reyDeEspadas, played: false, suit: 'espadas' },

   // Basto
   { id: 13, number: 'As', url: asDeBasto, played: false, suit: 'bastos' },
   { id: 14, number: 'Dos', url: dosDeBasto, played: false, suit: 'bastos' },
   { id: 15, number: 'Tres', url: tresDeBasto, played: false, suit: 'bastos' },
   { id: 16, number: 'Cuatro', url: cuatroDeBasto, played: false, suit: 'bastos' },
   { id: 17, number: 'Cinco', url: cincoDeBasto, played: false, suit: 'bastos' },
   { id: 18, number: 'Seis', url: seisDeBasto, played: false, suit: 'bastos' },
   { id: 19, number: 'Siete', url: sieteDeBasto, played: false, suit: 'bastos' },
   { id: 20, number: 'Ocho', url: ochoDeBasto, played: false, suit: 'bastos' },
   { id: 21, number: 'Nueve', url: nueveDeBasto, played: false, suit: 'bastos' },
   { id: 22, number: 'Diez', url: diezDeBasto, played: false, suit: 'bastos' },
   { id: 24, number: 'Rey', url: reyDeBasto, played: false, suit: 'bastos' },

   // Oro
   { id: 25, number: 'As', url: asDeOro, played: false, suit: 'oros' },
   { id: 26, number: 'Dos', url: dosDeOro, played: false, suit: 'oros' },
   { id: 27, number: 'Tres', url: tresDeOro, played: false, suit: 'oros' },
   { id: 28, number: 'Cuatro', url: cuatroDeOro, played: false, suit: 'oros' },
   { id: 29, number: 'Cinco', url: cincoDeOro, played: false, suit: 'oros' },
   { id: 30, number: 'Seis', url: seisDeOro, played: false, suit: 'oros' },
   { id: 31, number: 'Siete', url: sieteDeOro, played: false, suit: 'oros' },
   { id: 32, number: 'Ocho', url: ochoDeOro, played: false, suit: 'oros' },
   { id: 33, number: 'Nueve', url: nueveDeOro, played: false, suit: 'oros' },
   { id: 34, number: 'Diez', url: diezDeOro, played: false, suit: 'oros' },
   { id: 36, number: 'Rey', url: reyDeOro, played: false, suit: 'oros' },

   // Copas
   { id: 37, number: 'As', url: asDeCopas, played: false, suit: 'copas' },
   { id: 38, number: 'Dos', url: dosDeCopas, played: false, suit: 'copas' },
   { id: 39, number: 'Tres', url: tresDeCopas, played: false, suit: 'copas' },
   { id: 40, number: 'Cuatro', url: cuatroDeCopas, played: false, suit: 'copas' },
   { id: 41, number: 'Cinco', url: cincoDeCopas, played: false, suit: 'copas' },
   { id: 42, number: 'Seis', url: seisDeCopas, played: false, suit: 'copas' },
   { id: 43, number: 'Siete', url: sieteDeCopas, played: false, suit: 'copas' },
   { id: 44, number: 'Ocho', url: ochoDeCopas, played: false, suit: 'copas' },
   { id: 45, number: 'Nueve', url: nueveDeCopas, played: false, suit: 'copas' },
   { id: 46, number: 'Diez', url: diezDeCopas, played: false, suit: 'copas' },
   { id: 48, number: 'Rey', url: reyDeCopas, played: false, suit: 'copas' },
]


export const descatedCards: Card[] = [
  // Caballo
  { id: 11, number: 'espadas', url: caballoDeEspadas, played: false, suit: 'espadas' },
  { id: 23, number: 'bastos', url: caballoDeBastos, played: false, suit: 'bastos' },
  { id: 35, number: 'oros', url: caballoDeOros, played: false, suit: 'oros' },
  { id: 47, number: 'copas', url: caballoDeCopas, played: false, suit: 'copas' },

  // Joker cards
  { id: 49, number: 'Comodin', url: comodinRojo, played: false, suit: 'comodin' },
  { id: 50, number: 'Comodin', url: comodinNegro, played: false, suit: 'comodin' },
]