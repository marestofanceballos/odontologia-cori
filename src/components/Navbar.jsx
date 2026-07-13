import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const cerrarMenu = () => {
    const menu = document.getElementById("navbarCori");

    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

  const irArriba = () => {
    cerrarMenu();
    navigate("/");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  const irASeccion = (id) => {
    cerrarMenu();

    // Si estoy en Turnos, vuelvo al Inicio
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const seccion = document.getElementById(id);

        if (seccion) {
          seccion.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);

      return;
    }

    // Si ya estoy en Inicio
    const seccion = document.getElementById(id);

    if (seccion) {
      seccion.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-cori">
      <div className="container">

        <Link className="navbar-brand logo-cori" to="/" onClick={irArriba}>
          <img
            src="https://i.postimg.cc/Sx1ySy8h/Chat-GPT-Image-9-jun-2026-08-38-37-p-m.png"
            alt="Logo CORI"
            className="logo-img"
          />
        </Link>

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

        <div className="collapse navbar-collapse" id="navbarCori">
          <div className="navbar-nav ms-auto">

            <button className="nav-link btn-link-nav" onClick={irArriba}>
              Inicio
            </button>

            <button
              className="nav-link btn-link-nav"
              onClick={() => irASeccion("servicios")}
            >
              Servicios
            </button>

            <button
              className="nav-link btn-link-nav"
              onClick={() => irASeccion("contacto")}
            >
              Contacto
            </button>

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