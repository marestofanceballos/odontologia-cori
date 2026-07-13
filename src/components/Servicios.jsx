import "../styles/servicios.css";

function Servicios() {
  return (
    <section className="servicios-section" id="servicios">

      <div className="container">

        <span className="subtitulo-servicios">
          LO QUE HACEMOS
        </span>

        <h2 className="servicios-title">
          Nuestros Servicios
        </h2>

        <p className="servicios-texto">
          Brindamos soluciones odontológicas integrales con tecnología
          moderna y atención personalizada para cuidar tu salud bucal.
        </p>

        <div className="servicios-grid">

          <div className="servicio-card">
            <div className="servicio-icon">
              <i className="bi bi-heart-pulse"></i>
            </div>

            <h4>Implantes</h4>

            <p>
              Recuperamos la funcionalidad y estética de tu sonrisa con
              implantes dentales de alta calidad.
            </p>
          </div>


          <div className="servicio-card">
            <div className="servicio-icon">
              <i className="bi bi-stars"></i>
            </div>

            <h4>Estética Dental</h4>

            <p>
              Mejoramos la apariencia de tu sonrisa con tratamientos personalizados.
            </p>
          </div>

          <div className="servicio-card">
            <div className="servicio-icon">
              <i className="bi bi-shield-check"></i>
            </div>

            <h4>Prótesis</h4>

            <p>
              Soluciones para reemplazar piezas dentales y recuperar la función masticatoria.
            </p>
          </div>

        </div>

        {/* TARJETA DOCTOR */}

        <div className="doctor-card">

          <div className="doctor-left">

            <div>

              <span className="doctor-subtitulo">
                NUESTRO PROFESIONAL
              </span>

              <h3>
                Dr. Eduardo M. Ceballos
              </h3>

              <h5>
                Consultorio Odontológico de Rehabilitación Integral
              </h5>

              <p>
                Atención personalizada, ética y profesional,
                comprometida con el bienestar y el cuidado
                integral de la sonrisa de cada paciente.
              </p>

            </div>

          </div>

          <div className="doctor-right">

            <div className="doctor-item">
              <i className="bi bi-shield-check"></i>
              <span>Atención personalizada</span>
            </div>

            <div className="doctor-item">
              <i className="bi bi-star"></i>
              <span>Experiencia y profesionalismo</span>
            </div>

            <div className="doctor-item">
              <i className="bi bi-heart"></i>
              <span>Compromiso con tu bienestar</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Servicios;