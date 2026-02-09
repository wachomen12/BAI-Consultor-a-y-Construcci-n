import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      {/* Animated background elements */}
      <div className="hero-bg-lines" aria-hidden="true">
        <div className="hero-line hero-line--1"></div>
        <div className="hero-line hero-line--2"></div>
        <div className="hero-line hero-line--3"></div>
        <div className="hero-line hero-line--4"></div>
      </div>
      <div className="hero-glow" aria-hidden="true"></div>

      <div className="hero-content">
        <span className="hero-subtitle">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.7 }}>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          BAI Consultoría y Construcción
        </span>
        <h1>Diseñamos y construimos<br /><span className="hero-highlight">espacios que inspiran</span></h1>
        <p>Tu proyecto con seguridad, estética, funcionalidad y eficiencia garantizado</p>
        <div className="hero-buttons">
          <a href="#contacto" className="hero-btn hero-btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Solicitar Cotización
          </a>
          <a href="#proyectos" className="hero-btn hero-btn-secondary">
            Ver Proyectos
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17l9.2-9.2M17 17V7.8H7.8"/>
            </svg>
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <strong>18+</strong>
            <span>Proyectos</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <strong>7</strong>
            <span>Servicios</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <strong>100%</strong>
            <span>Compromiso</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
