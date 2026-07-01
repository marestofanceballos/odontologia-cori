import "../styles/whatsapp.css";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5493865416533"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;