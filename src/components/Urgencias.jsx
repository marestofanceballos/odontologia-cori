import "../styles/urgencias.css";

function Urgencias() {
  return (
    <section className="urgencias-section">

      <div className="urgencias-overlay">

        <div className="container">

          <span className="urgencias-subtitle">
            ATENCIÓN INMEDIATA
          </span>

          <h2 className="urgencias-title">
            ¿Tenés una urgencia odontológica?
          </h2>

          <p className="urgencias-text">
            Si presentás dolor intenso, inflamación o una urgencia dental,
            comunicate con nosotros por WhatsApp y responderemos lo antes posible.
          </p>

          <a
            href="https://wa.me/5493865416533"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-urgencia"
          >
            💬 Contactar por WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}

export default Urgencias;