import "../styles/horarios.css";

function Horarios() {
  return (
    <section className="horarios">
      <div className="container">

        <h2 className="titulo-seccion">
  Horarios de Atención
</h2>

<p className="subtitulo-seccion">
  Estamos para ayudarte con atención personalizada y profesional.
</p>

        <div className="horarios-grid">

          <div className="horario-card">
            <div className="icono">🕒</div>

            <h3>Lunes a Viernes</h3>

            <p>09:00 a 12:30 hs</p>
            <p>17:00 a 21:00 hs</p>
          </div>

          <div className="urgencia-card">
            <div className="icono">🚨</div>

            <h3>Urgencias</h3>

            <p>
              Ante una urgencia odontológica comuníquese por
              WhatsApp para recibir atención.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Horarios;