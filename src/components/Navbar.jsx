import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const cerrarMenu = () => {
    const menu = document.getElementById("navbarCori");

    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

  // 🔥 esto es lo que hace que suba arriba
  const irArriba = () => {
    cerrarMenu();
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-cori">
      <div className="container">

        {/* Logo */}
        <Link
          className="navbar-brand logo-cori"
          to="/"
          onClick={irArriba}
        >
          <img
            src="https://i.postimg.cc/Sx1ySy8h/Chat-GPT-Image-9-jun-2026-08-38-37-p-m.png"
            alt="Logo CORI"
            className="logo-img"
          />
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCori"
          aria-controls="navbarCori"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse" id="navbarCori">
          <div className="navbar-nav ms-auto">

            <Link
              className="nav-link"
              to="/"
              onClick={irArriba}
            >
              Inicio
            </Link>

            <a
              className="nav-link"
              href="/#servicios"
              onClick={cerrarMenu}
            >
              Servicios
            </a>

            <a
              className="nav-link"
              href="/#contacto"
              onClick={cerrarMenu}
            >
              Contacto
            </a>

            <Link
              className="nav-link"
              to="/turnos"
              onClick={cerrarMenu}
            >
              Solicitar Turno
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;