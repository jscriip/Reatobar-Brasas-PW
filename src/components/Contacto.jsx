import { FaSquareWhatsapp } from 'react-icons/fa6';
import './Contacto.css';
import { FaInstagram, FaFacebookF, FaTiktok, FaMapMarkerAlt, FaClock, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa';

function Contacto() {
    return (
        <section id="contacto" className='contacto-seccion'>
            <div className='contacto-contenedor'>
                <div className='contacto-info'>
                    <h2>Dónde Encontrarnos</h2>
                    <div className='info-item'>
                        <FaMapMarkerAlt className='icono-contacto'/>
                        <p>Rinconada, Los Andes<br/>Región de Valparaiso</p>
                    </div>
                    <div className='info-item'>
                        <FaClock className='icono-contacto'/>
                        <p>Jueves a Sábado <br/>19:00 - 02:30</p>
                    </div>
                </div>

                <div className='contacto-redes'>
                    <h2>Nuestras Redes</h2>
                    <p>Síguenos para enterarte de nuestros eventos, promociones y concursos:</p>

                    <div className='iconos-redes'>
                        <a href="https://www.instagram.com/restobarlosbrasa.785/" target='_blank' rel='noopener noreferrer' className='red-btn insta'>
                        <FaInstagram />
                        </a>
                    </div>
                    <div className='iconos-redes'>
                        <a href="https://www.facebook.com/profile.php?id=61572010708038" target='_blank' rel='noopener noreferrer' className='red-btn fb'>
                        <FaFacebookF />
                        </a>
                    </div>
                    <div className='iconos-redes'>
                        <a href="https://wa.me/56964418861" target='_blank' rel='noopener noreferrer' className='red-btn wa'>
                        <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacto;