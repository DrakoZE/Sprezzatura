import './../../App.css';
import './Header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faHome, faUser, faRightToBracket, faShirt, faShop, faPhone} from '@fortawesome/free-solid-svg-icons';

function Header() {

    return (
        <>
        <header>
                <div className='logo-container'>
                    <img className="logo" src="Logo Sprezzaturra.png" alt="Logo Sprezzaturra" />
                    <h1 className='logo-text'>Sprezzaturra</h1>
                </div>
                <nav>
                <ul className='nav-container'>
                    <li><a href=""><FontAwesomeIcon className='icon-header' icon={faHome} /> <span>Pagina principal</span></a></li>
                    <li><a href=""><FontAwesomeIcon className='icon-header' icon={faShirt} /><span>Nuestros productos</span></a></li>
                    <li><a href=""><FontAwesomeIcon className='icon-header' icon={faShop} /><span>Sobre nosotros</span></a></li>
                    <li><a href=""><FontAwesomeIcon className='icon-header' icon={faPhone} /><span>Contacto</span></a></li>
                </ul>
            </nav>
        </header>
            </>
    )
}

export default Header