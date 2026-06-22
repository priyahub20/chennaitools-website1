import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppFloat.css";

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917604876048?text=Hello Chennai Tools, I would like to know more about your paper cup machines."
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppFloat;