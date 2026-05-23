import './Header.css';

function Header() {
    return (
        <header className='header-permanente'>
            <div className='logo-header'>
                <span>Restobar Brasa</span>
            </div>

            <nav className='navegacion-header'>
                <a href="#inicio">Inicio</a>
                <a href="#especialidades">Especialidades</a>
                <a href="#contacto">Contacto</a>
            </nav>
        </header>
    );
}

export default Header;