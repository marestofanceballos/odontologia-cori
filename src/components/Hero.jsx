import "../styles/hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay">
        <h1>Consultorio Odontológico CORI</h1>

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