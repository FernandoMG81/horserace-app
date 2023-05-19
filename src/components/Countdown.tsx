import React, { useEffect, useState } from 'react'
import './countdown.css'

interface Props {
  onFinish: () => void
}

const CountdownModal = ({ onFinish }: Props) => {
  const [timeLeft, setTimeLeft] = useState(5)

  useEffect(() => {
    if (timeLeft > 0) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    } else {
      onFinish()
    }
  }, [timeLeft, onFinish])

  return (
    <div>
      <div className='spinner' />
      <div className='number countdown-number'>{timeLeft}</div>
    </div>
  )
}

export default CountdownModal
