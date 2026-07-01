import { useState } from "react";
import "../styles/turnos.css";

function Turnos() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    fecha: "",
    horario: "",
    motivo: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const enviarWhatsApp = (e) => {
  e.preventDefault();

  const mensaje = `🦷 Solicitud de Turno

👤 Nombre: ${form.nombre}

📞 Teléfono: ${form.telefono}

📅 Fecha: ${form.fecha}

⏰ Horario: ${form.horario}

📝 Motivo: ${form.motivo}`;

  const numero = "5493865416533";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
};

  return (
    <section className="turnos-page">
      <div className="container">

        <h1>Solicitar Turno</h1>

        <form className="turnos-form" onSubmit={enviarWhatsApp}>

          <input
            type="text"
            name="nombre"
            placeholder="Nombre y Apellido"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="fecha"
            onChange={handleChange}
            required
          />

          <select
            name="horario"
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un horario</option>

            <option>09:00</option>
            <option>09:30</option>
            <option>10:00</option>
            <option>10:30</option>
            <option>11:00</option>
            <option>11:30</option>
            <option>12:00</option>

            <option>17:00</option>
            <option>17:30</option>
            <option>18:00</option>
            <option>18:30</option>
            <option>19:00</option>
            <option>19:30</option>
            <option>20:00</option>
            <option>20:30</option>
          </select>

          <textarea
            name="motivo"
            placeholder="Motivo de la consulta"
            rows="4"
            onChange={handleChange}
          />

          <button type="submit">
            Enviar por WhatsApp
          </button>

        </form>

      </div>
    </section>
  );
}

export default Turnos;