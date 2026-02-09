import './Courses.css'

function Courses() {
  const courses = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Modelado BIM',
      description: 'Aprende a gestionar proyectos con metodología BIM desde cero hasta nivel avanzado.'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 19l7-7 3 3-7 7-3-3z"/>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
          <path d="M2 2l7.586 7.586"/>
          <circle cx="11" cy="11" r="2"/>
        </svg>
      ),
      title: 'Diseño Arquitectónico',
      description: 'Domina las herramientas y técnicas del diseño arquitectónico profesional.'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: 'Renderizado 3D y AR-VR',
      description: 'Crea visualizaciones fotorrealistas y experiencias inmersivas de tus proyectos.'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="6" width="20" height="3" rx="1"/>
          <path d="M6 9v12M18 9v12M2 21h20"/>
          <path d="M10 9v12M14 9v12"/>
          <path d="M4 3l2 3M20 3l-2 3" strokeWidth="2"/>
        </svg>
      ),
      title: 'Diseño Estructural Sismo Resistente',
      description: 'Aprende los fundamentos del cálculo y diseño estructural sismo resistente con normativa NEC.'
    }
  ]

  return (
    <section id="cursos" className="courses">
      <div className="courses-container">
        <div className="courses-header">
          <span className="courses-label">Formación</span>
          <h2>Cursos e Información</h2>
          <p>Capacítate con profesionales del sector de la construcción y el diseño</p>
        </div>

        <div className="courses-badge-row">
          <div className="courses-coming-soon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            Próximamente
          </div>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-card-badge">Próximamente</div>
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>

        <div className="courses-cta-box">
          <div className="courses-cta-content">
            <h3>¿Interesado en nuestros cursos?</h3>
            <p>Déjanos tu contacto y te avisaremos cuando estén disponibles. Serás el primero en enterarte.</p>
          </div>
          <a href="#contacto" className="courses-cta-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  )
}

export default Courses
