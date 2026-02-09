import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#inicio" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-text">
            <span className="logo-bai">
              <span className="logo-b">B</span>
              <span className="logo-a">A</span>
              <span className="logo-i">I</span>
            </span>
            <span className="logo-tagline">Consultoría y Construcción</span>
          </div>
        </a>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
          <li><a href="#nosotros" onClick={closeMenu}>Nosotros</a></li>
          <li><a href="#proyectos" onClick={closeMenu}>Proyectos</a></li>
          <li><a href="#servicios" onClick={closeMenu}>Servicios</a></li>
          <li><a href="#cursos" onClick={closeMenu}>Cursos</a></li>
          <li>
            <a href="#contacto" onClick={closeMenu} className="navbar-cta">
              Contacto
            </a>
          </li>
        </ul>

        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Overlay para móvil */}
      <div 
        className={`navbar-overlay ${menuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      />
    </nav>
  )
}

export default Navbar
