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
                <div className='search-container'>
                    <form action="" method="get">
                        <input type="text"  placeholder='Busque productos...'/>
                    <button type="submit"><FontAwesomeIcon className='icon-header' icon={faSearch} /></button>
                    </form>
                </div>
                <div className='user-container'>
                    <img className='user' src="default image.jpeg" alt="Foto de perfil del usuario" />
                    <div className='session-container'>
                        <a className='log-in' href=""><FontAwesomeIcon className='icon-header' icon={faUser} /><span>Iniciar sesion</span></a>
                        <a className='register' href=""><FontAwesomeIcon className='icon-header' icon={faRightToBracket} /><span>Registrarse</span></a>
                    </div>
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