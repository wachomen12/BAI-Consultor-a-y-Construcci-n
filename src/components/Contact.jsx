import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const validate = (data) => {
    const errs = {}
    if (!data.name.trim()) errs.name = 'El nombre es obligatorio'
    else if (data.name.trim().length < 3) errs.name = 'Mínimo 3 caracteres'

    if (!data.email.trim()) errs.email = 'El correo es obligatorio'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'Correo inválido'

    if (data.phone && !/^[\d\s\+\-()]{7,15}$/.test(data.phone)) errs.phone = 'Teléfono inválido'

    if (!data.message.trim()) errs.message = 'El mensaje es obligatorio'
    else if (data.message.trim().length < 10) errs.message = 'Mínimo 10 caracteres'

    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const newData = { ...formData, [name]: value }
    setFormData(newData)
    if (touched[name]) {
      setErrors(validate(newData))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(validate(formData))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, phone: true, message: true })
    const errs = validate(formData)
    setErrors(errs)

    if (Object.keys(errs).length > 0) return

    const text = `Hola BAI Consultoría y Construcción!%0A%0A*Nombre:* ${formData.name}%0A*Email:* ${formData.email}${formData.phone ? `%0A*Teléfono:* ${formData.phone}` : ''}%0A%0A*Mensaje:*%0A${formData.message}`
    window.open(`https://wa.me/593961429072?text=${text}`, '_blank')
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTouched({})
    setErrors({})
  }

  return (
    <section id="contacto" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-label">Hablemos</span>
          <h2>Contáctanos</h2>
          <p>¿Tienes un proyecto en mente? Escríbenos y hagámoslo realidad</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-item">
              <span className="contact-info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </span>
              <div>
                <h4>WhatsApp</h4>
                <p>
                  <a href="https://wa.me/593961429072" target="_blank" rel="noopener noreferrer">
                    0961429072
                  </a>
                  {' / '}
                  <a href="https://wa.me/593991067869" target="_blank" rel="noopener noreferrer">
                    0991067869
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
              </span>
              <div>
                <h4>Instagram</h4>
                <p>
                  <a href="https://instagram.com/bai_2k25cyc" target="_blank" rel="noopener noreferrer">
                    @bai_2k25cyc
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </span>
              <div>
                <h4>Horario</h4>
                <p>Lun - Vie: 9:00 - 18:00</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className={`form-group ${touched.name && errors.name ? 'has-error' : ''} ${touched.name && !errors.name && formData.name ? 'is-valid' : ''}`}>
              <label htmlFor="name">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tu nombre"
              />
              {touched.name && errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className={`form-group ${touched.email && errors.email ? 'has-error' : ''} ${touched.email && !errors.email && formData.email ? 'is-valid' : ''}`}>
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="tu@email.com"
              />
              {touched.email && errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className={`form-group ${touched.phone && errors.phone ? 'has-error' : ''}`}>
              <label htmlFor="phone">Teléfono <span className="form-optional">(opcional)</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="+593 99 123 4567"
              />
              {touched.phone && errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>

            <div className={`form-group ${touched.message && errors.message ? 'has-error' : ''} ${touched.message && !errors.message && formData.message ? 'is-valid' : ''}`}>
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Cuéntanos sobre tu proyecto..."
                rows="5"
              ></textarea>
              {touched.message && errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button type="submit" className="form-submit">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
