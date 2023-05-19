import './header.css'
export const Header = () => {
  return (
    <main>
      <header className='animated rubberBand header'>
        <img className='logo' src='/src/images/horse_race_logo.webp' alt='horse race logo' />
        <h2>Carrera de caballos</h2>
        <h4>La previa</h4>
      </header>
    </main>
  )
}
