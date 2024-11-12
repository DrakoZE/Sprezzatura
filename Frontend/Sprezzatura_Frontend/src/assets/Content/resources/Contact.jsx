import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import '../Content.css'
import { faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
function Contact() {

    return (
        <div className='Contact'>
        <div className='contact-container'>
            <h1>Nuestro contacto</h1>
            <ul className='list-footer'>
                        <li><a href="https://www.tiktok.com/@sprezzatura.arg?_t=8rEaY0JCMy7&_r=1"><FontAwesomeIcon icon={faTiktok} />Tiktok</a></li>
                        <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=sprezzatura.arg@gmail.com"><FontAwesomeIcon icon={faEnvelope} />sprezzatura.arg@gmail.com</a></li>
                        <li><a href="https://www.instagram.com/sprezzaturarg?igsh=MTAxZnZ1anU0NHB4cg=="><FontAwesomeIcon icon={faInstagram} />Instagram</a></li>
                    </ul>
        </div>
    </div>
    )
}

export default Contact