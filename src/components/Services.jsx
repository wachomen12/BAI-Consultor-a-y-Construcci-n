import './Services.css'

function Services() {
  const services = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Gestión y Modelado BIM',
      description: 'Gestión integral de proyectos con metodología BIM para un control total del diseño y construcción.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M3 7v1a3 3 0 003 3h12a3 3 0 003-3V7M21 7l-9-4-9 4M12 11v10"/>
        </svg>
      ),
      title: 'Diseño Arquitectónico y Renderizado',
      description: 'Diseño arquitectónico profesional con renderizado fotorrealista y visualización AR-VR.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <path d="M16 13H8M16 17H8M10 9H8"/>
        </svg>
      ),
      title: 'Asesoría Legal e Inmobiliaria',
      description: 'Asesoría legal completa y valoración de bienes inmuebles para decisiones seguras.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="6" width="20" height="3" rx="1"/>
          <path d="M6 9v12M18 9v12M2 21h20"/>
          <path d="M10 9v12M14 9v12"/>
        </svg>
      ),
      title: 'Diseño y Reforzamiento Estructural',
      description: 'Diseño, evaluación y reforzamiento estructural para edificaciones seguras y duraderas.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 20h20M5 20V8l5-4 5 4v12"/>
          <path d="M9 20v-4h2v4M15 20V12l5-3v11"/>
          <rect x="9" y="10" width="2" height="2"/>
        </svg>
      ),
      title: 'Construcción y Control de Obras',
      description: 'Construcción, residencia y control de obras civiles con los más altos estándares de calidad.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
          <rect x="9" y="3" width="6" height="4" rx="1"/>
          <path d="M9 14l2 2 4-4"/>
        </svg>
      ),
      title: 'Proyecto Ejecutivo y Aprobación',
      description: 'Desarrollo de proyectos ejecutivos y gestión de aprobación municipal completa.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      title: 'Remodelación',
      description: 'Transformamos espacios existentes, renovando y mejorando para adaptarlos a tus nuevas necesidades.'
    }
  ]

  return (
    <section id="servicios" className="services">
      <div className="services-container">
        <div className="services-header">
          <span className="services-label">Lo Que Hacemos</span>
          <h2>Nuestros Servicios</h2>
          <p>Soluciones integrales para hacer realidad tu proyecto</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
