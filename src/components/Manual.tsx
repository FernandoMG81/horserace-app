import useToggle from '../hook/useToggle'
import './manual.css'

export const Manual = () => {

  const [showManual, setShowManual] = useToggle()

  return (
    <>
      <button className='button' onClick={setShowManual}>Como se juega</button>
      {
      showManual && <article className='article'>
        <header className='header-manual'>
          <h1 className='title-manual'>Manual del juego</h1>
        </header>
        <article className='main-manual'>
          <ul className='ul-manual'>
            <li className='li-manual'>
              <h3>Apuesta</h3>
              <p>Antes de comenzar el juego, debes cargar la cantidad de la apuesta. Si no se especifica ninguna cantidad, se tomará como apuesta predeterminada 100 pesos/dolares/.</p>
            </li>

            <li className='li-manual'>
              <h3>Jugadores</h3>
              <p>Ingresa los nombres de los cuatro jugadores que participarán en el juego. Elige tu caballo favorito.</p>
            </li>

            <li className='li-manual'>
              <h3>Preparación de la pista</h3>
              <p>Se colocan una fila de cartas boca abajo a la derecha, representando la longitud de la pista de carreras. Las cartas restantes se mezclan en otro montón.</p>
            </li>

            <li className='li-manual'>
              <h3>Avance de los caballos</h3>
              <p>Se van sacando cartas del montón restante y se revela el palo. El caballo correspondiente al palo avanzará un casillero en la pista.</p>
            </li>

            <li className='li-manual'>
              <h3>Retroceso de los caballos</h3>
              <p>Si todos los caballos han superado una de las cartas volteadas a la derecha de la pista, esa carta se da vuelta y el caballo correspondiente al palo retrocede un casillero.</p>
            </li>

            <li className='li-manual'>
              <h3>Ganador</h3>
              <p>El primer caballo que llegue a la línea de meta será el ganador.</p>
            </li>

            <li className='li-manual'>
              <h3>Disfruta del juego</h3>
              <p>Recuerda que todo el juego se desarrolla automáticamente, solo necesitas sentarte, realizar tus apuestas con tus amigos y disfrutar.</p>
            </li>
          </ul>
        </article>
      </article>
    }
    </>
  )
}
