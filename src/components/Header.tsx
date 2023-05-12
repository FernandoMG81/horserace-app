import './header.css'
export const Header = () => {
  return (
    <main>
      <header className='animated rubberBand'>
        <img className='logo' src='/src/assets/horse_race_logo.png' alt='horse race logo' />
        <h2>Carrera de caballos</h2>
        <h4>La previa</h4>
      </header>
    </main>
  )
}
