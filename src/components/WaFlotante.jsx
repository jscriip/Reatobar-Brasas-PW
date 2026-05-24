import './WaFlotante.css';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppFlotante() {
  // Reemplaza con el número real del Restobar Los Braza
  const numeroTelefono = "56900000000"; 
  const mensajePredeterminado = "¡Hola! Me gustaría hacer una reserva en Los Braza.";
  
  // Creamos la URL codificada
  const urlWa = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensajePredeterminado)}`;

  return (
    <a 
      href={urlWa} 
      className="btn-wa-flotante" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Escríbenos por WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppFlotante;