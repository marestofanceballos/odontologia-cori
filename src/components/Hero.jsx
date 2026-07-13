import "../styles/hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay">

        <img
          src="https://i.postimg.cc/Sx1ySy8h/Chat-GPT-Image-9-jun-2026-08-38-37-p-m.png"
          alt="Logo CORI"
          className="hero-logo"
        />

        <h2>
  Consultorio Odontológico de
  <br />
  Rehabilitación Integral
</h2>

        <p>
          Brindamos atención odontológica integral con profesionalismo,
          tecnología y un trato personalizado para cuidar tu sonrisa.
        </p>

        <Link to="/turnos" className="btn-turno">
          Solicitar Turno
        </Link>

      </div>
    </section>
  );
}

export default Hero;