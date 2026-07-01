import "../styles/contacto.css";

function Contacto() {
  return (
    <section className="contacto-section" id="contacto">
      <div className="container">

        <h2 className="text-center mb-5">Contacto</h2>

        <div className="row">

          {/* Información */}
          <div className="col-lg-5 mb-4">

            <div className="contacto-card mb-3">
              <h4>📍 Dirección</h4>
              <p>Italia 1421, Concepción, Tucumán</p>
            </div>

            <div className="contacto-card mb-3">
              <h4>📞 Teléfono</h4>
              <p>+54 3865 416533</p>
            </div>

            <div className="contacto-card">
              <h4>🕒 Horarios</h4>
              <p>Lunes a Viernes</p>
              <p>09:00 a 12:30 hs</p>
              <p>17:00 a 21:00 hs</p>
            </div>

          </div>

          {/* Mapa */}
          <div className="col-lg-7">

            <iframe
               title="Mapa"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.0293531014086!2d-65.59197!3d-27.3435508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423cf42e14b6277%3A0x31eaf893b7562068!2sItalia%201421%2C%20T4146%20Concepci%C3%B3n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1781016006689!5m2!1ses-419!2sar"
               width="100%"
               height="350"
               style={{ border: 0, borderRadius: "15px" }}
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contacto;