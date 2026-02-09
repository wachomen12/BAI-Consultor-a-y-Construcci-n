import { useState, useEffect, useCallback, useMemo } from 'react'
import { projects } from '../data/projects'
import './Portfolio.css'

const FILTERS = [
  { key: 'todos', label: 'Todos', icon: null },
  { key: 'arquitectura', label: 'Arquitectura', icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 21h18M5 21V7l7-4 7 4v14"/>
      <path d="M9 21v-6h6v6"/>
    </svg>
  )},
  { key: 'estructural', label: 'Cálculo Estructural', icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="6" width="20" height="3" rx="1"/>
      <path d="M6 9v12M18 9v12M2 21h20"/>
      <path d="M10 9v12M14 9v12"/>
    </svg>
  )}
]

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [activeFilter, setActiveFilter] = useState('todos')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'todos') return projects
    if (activeFilter === 'estructural') return projects.filter(p => p.category === 'Cálculo Estructural')
    return projects.filter(p => p.category !== 'Cálculo Estructural')
  }, [activeFilter])

  const handleFilterChange = (key) => {
    if (key === activeFilter) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveFilter(key)
      setIsTransitioning(false)
    }, 250)
  }

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedProject])

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    setImageLoaded(false)
  }

  const closeModal = useCallback(() => {
    setSelectedProject(null)
    setImageLoaded(false)
  }, [])

  const nextImage = useCallback(() => {
    if (selectedProject) {
      setImageLoaded(false)
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }, [selectedProject])

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setImageLoaded(false)
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }, [selectedProject])

  // Keyboard navigation
  useEffect(() => {
    if (!selectedProject) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedProject, closeModal, nextImage, prevImage])

  return (
    <section id="proyectos" className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <span className="portfolio-label">Nuestro Trabajo</span>
          <h2>Portafolio de Proyectos</h2>
          <p>Cada proyecto representa nuestra pasión por crear espacios excepcionales</p>
        </div>

        <div className="portfolio-filters">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`portfolio-filter-btn ${activeFilter === f.key ? 'active' : ''}`}
              onClick={() => handleFilterChange(f.key)}
            >
              {f.icon}
              {f.label}
              <span className="filter-count">
                {f.key === 'todos' ? projects.length
                  : f.key === 'estructural' ? projects.filter(p => p.category === 'Cálculo Estructural').length
                  : projects.filter(p => p.category !== 'Cálculo Estructural').length}
              </span>
            </button>
          ))}
        </div>

        <div className={`portfolio-grid ${isTransitioning ? 'transitioning' : ''}`}>
          {filteredProjects.map((project, i) => (
            <div
              key={project.id}
              className={`portfolio-card ${i === 0 ? 'portfolio-card--featured' : ''}`}
              onClick={() => openModal(project)}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="portfolio-card-image">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  loading="lazy"
                />
                <div className="portfolio-card-overlay">
                  <div className="portfolio-card-info">
                    <span className="portfolio-card-category">{project.category}</span>
                    <h3>{project.name}</h3>
                    <span className="portfolio-card-location">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      {project.location}
                    </span>
                    <span className="portfolio-card-count">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                      {project.images.length} imágenes
                    </span>
                  </div>
                  <div className="portfolio-card-action">
                    <span>Ver Proyecto</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Fullscreen */}
      {selectedProject && (
        <div className="portfolio-modal" onClick={closeModal}>
          <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
            
            {/* Close button */}
            <button className="modal-close" onClick={closeModal} aria-label="Cerrar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            {/* Left: Gallery */}
            <div className="modal-gallery">
              <div className="modal-image-wrapper">
                <img
                  key={currentImageIndex}
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.name} - ${currentImageIndex + 1}`}
                  className={`modal-main-img ${imageLoaded ? 'loaded' : ''}`}
                  onLoad={() => setImageLoaded(true)}
                />

                {/* Counter badge */}
                <div className="modal-counter">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>

                {/* Nav arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button className="modal-arrow modal-arrow--left" onClick={prevImage} aria-label="Anterior">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M15 18l-6-6 6-6"/>
                      </svg>
                    </button>
                    <button className="modal-arrow modal-arrow--right" onClick={nextImage} aria-label="Siguiente">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {selectedProject.images.length > 1 && (
                <div className="modal-thumbs-bar">
                  {selectedProject.images.map((img, index) => (
                    <button
                      key={index}
                      className={`modal-thumb ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => { setImageLoaded(false); setCurrentImageIndex(index) }}
                    >
                      <img src={img} alt={`Miniatura ${index + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Details */}
            <div className="modal-details">
              <span className="modal-badge">{selectedProject.category}</span>
              <h2>{selectedProject.name}</h2>
              
              <div className="modal-location-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>{selectedProject.location}</span>
              </div>

              <p className="modal-desc">{selectedProject.description}</p>

              {selectedProject.features && (
                <div className="modal-section">
                  <h4>Características</h4>
                  <ul className="modal-feature-list">
                    {selectedProject.features.map((f, i) => (
                      <li key={i}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.services && (
                <div className="modal-section">
                  <h4>Servicios Realizados</h4>
                  <div className="modal-tags">
                    {selectedProject.services.map((s, i) => (
                      <span key={i} className="modal-tag">{s}</span>
                    ))}
                  </div>
                </div>
              )}

              <a href="#contacto" className="modal-cta-btn" onClick={closeModal}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
                Solicitar Información
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio
