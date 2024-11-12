import './Footer.css'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

function Footer() {

    return (
        <footer>
            <div className='logoFooter-container'>
                <img className='logoFooter' src="Logo Sprezzaturra.png" alt="Logo Sprezzaturra" />
                <p className='logoFooter-text'>La industria Nº1 de ropa ecologica</p> 
            </div>
            <div className='info-container'>
            <div className='footer-container'>
                    <p className='text-footer'>Servicios que ofrecemos</p>
                    <ul className='list-footer'>
                        <li><Link to="/Product">Creacion de ropa personalizada</Link></li>
                        <li><Link to="/Product">Fabricacion de ropa ecologica</Link></li>
                    </ul>
                </div>
                <div className='footer-container'>
                    <p className='text-footer'>Nuestras Redes</p>
                    <ul className='list-footer'>
                        <li><a href="https://www.tiktok.com/@sprezzatura.arg?_t=8rEaY0JCMy7&_r=1"><FontAwesomeIcon icon={faTiktok} />Tiktok</a></li>
                        <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=sprezzatura.arg@gmail.com"><FontAwesomeIcon icon={faEnvelope} />sprezzatura.arg@gmail.com</a></li>
                        <li><a href="https://www.instagram.com/sprezzaturarg?igsh=MTAxZnZ1anU0NHB4cg=="><FontAwesomeIcon icon={faInstagram} />Instagram</a></li>
                    </ul>
                </div>
                <div className='footer-container'>
                    <p className='text-footer'>Nuestros Productos</p>
                    <ul className='list-footer'>
                        <li><Link to="/Product">Vestidos completos</Link></li>
                        <li><Link to="/Product">Pantalones y faldas</Link></li>
                        <li><Link to="/Product">Remeras</Link></li>
                    </ul>
                    
                </div>
            </div>
            <div className='copy-container'>
            <hr />
            <h1>Todos los derechos reservados por Sprezzaturra 2024 <FontAwesomeIcon icon={faCopyright}/> </h1>
            </div>
        </footer>
    )
}

export default Footer