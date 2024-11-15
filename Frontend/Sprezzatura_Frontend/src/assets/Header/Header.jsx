import './../../App.css';
import './Header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faHome, faUser, faRightToBracket, faShirt, faShop, faPhone} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
                    <li><Link to="/"><FontAwesomeIcon className='icon-header' icon={faHome} /> <span>Pagina principal</span></Link></li>
                    <li><Link to="/Product"><FontAwesomeIcon className='icon-header' icon={faShirt} /><span>Nuestros productos</span></Link></li>
                    <li><Link to="/Enterprise"><FontAwesomeIcon className='icon-header' icon={faShop} /><span>Sobre nosotros</span></Link></li>
                </ul>
            </nav>
        </header>
            </>
    )
}

export default Header