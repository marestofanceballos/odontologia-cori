import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">

        <div className="footer-brand">

          <img
            src="https://i.postimg.cc/Sx1ySy8h/Chat-GPT-Image-9-jun-2026-08-38-37-p-m.png"
            alt="Logo CORI"
            className="footer-logo"
          />

          <h4 className="footer-title">
            Consultorio Odontológico
          </h4>

        </div>

        <p className="footer-text">
          Brindando atención odontológica con compromiso y profesionalismo.
        </p>

        <hr />

        <p className="footer-copy">
          © 2026 Consultorio Odontológico. Todos los derechos reservados.
        </p>

        <p className="footer-dev">
          Desarrollado por <strong>Dev.Mariana_</strong>
        </p>

      </div>
    </footer>
  );
}

export default Footer;