import './About.css'

function About() {
  const specialties = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M3 7v1a3 3 0 003 3h12a3 3 0 003-3V7M21 7l-9-4-9 4M12 11v10"/>
        </svg>
      ),
      title: 'Diseño Arquitectónico',
      description: 'Creamos diseños únicos que combinan estética, funcionalidad y sostenibilidad para cada proyecto.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/>
          <path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01"/>
        </svg>
      ),
      title: 'Viviendas Unifamiliares',
      description: 'Construimos hogares personalizados que reflejan el estilo de vida y necesidades de cada familia.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="6" width="8" height="15" rx="1"/>
          <rect x="9" y="3" width="6" height="18" rx="1"/>
          <rect x="15" y="8" width="8" height="13" rx="1"/>
          <path d="M4 10h2M4 14h2M4 18h2M11 7h2M11 11h2M11 15h2M18 12h2M18 16h2"/>
        </svg>
      ),
      title: 'Proyectos Urbanos',
      description: 'Desarrollamos proyectos de urbanización y planificación que transforman comunidades.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <path d="M8 13h3M8 17h6M8 9h1"/>
        </svg>
      ),
      title: 'Gestión BIM',
      description: 'Gestión integral con metodología BIM para un control total del diseño y la construcción.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Renderizado 3D / AR-VR',
      description: 'Imágenes fotorrealistas y experiencias inmersivas para visualizar tu espacio antes de que exista.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      title: 'Construcción',
      description: 'Ejecutamos proyectos con los más altos estándares de calidad, seguridad y eficiencia.'
    }
  ]

  const stats = [
    { value: '18+', label: 'Proyectos Realizados' },
    { value: '7', label: 'Servicios Especializados' },
    { value: '100%', label: 'Clientes Satisfechos' },
    { value: '2025', label: 'Innovando Siempre' }
  ]

  return (
    <section id="nosotros" className="about">
      <div className="about-container">
        <div className="about-header">
          <span className="about-label">Quiénes Somos</span>
          <h2>Sobre Nosotros</h2>
          <p className="about-subtitle">
            Somos una empresa especializada en diseño arquitectónico y construcción, 
            comprometidos con la excelencia y la innovación en cada proyecto.
          </p>
        </div>

        <div className="about-intro">
          <p>
            En <strong>BAI Consultoría y Construcción</strong>, transformamos ideas en espacios 
            extraordinarios. Con años de experiencia en el sector, nuestro equipo de profesionales 
            combina creatividad, técnica y pasión para entregar proyectos que superan expectativas.
          </p>
          <p>
            Desde el concepto inicial hasta la entrega final, acompañamos a nuestros clientes 
            en cada etapa del proceso, garantizando resultados que perduran en el tiempo.
          </p>
        </div>

        <div className="about-stats">
          {stats.map((stat, i) => (
            <div key={i} className="about-stat-item">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="about-grid">
          {specialties.map((specialty, index) => (
            <div key={index} className="about-card">
              <div className="about-card-icon">{specialty.icon}</div>
              <h3>{specialty.title}</h3>
              <p>{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
