import { Card } from '../types'

export const getRandomCard = (): number => {
  return Math.floor(Math.random() * 48) + 1
}

export const shuffleArray = (array: Card[]) => {
  function random () {
    return Math.random() - 0.5
  }
  array.sort(random)

  return array
}

export const capitalize = (word: string) => {
  const lower = word.toLowerCase()
  return word.charAt(0).toUpperCase() + lower.slice(1)
}
