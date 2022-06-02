import React from 'react'
import CartWidget from './CartWidget';
import logo from './nuevo_gato_negro_logo.webp';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Title-App-header">El Gato Negro</p>
        <nav className="Items-App-header">
            <Link className="li-App-header inicio" to="/">Inicio</Link>
            <Link className="li-App-header comida" to="/comida">Comida</Link>
            <Link className="li-App-header ropa" to="/ropa">Ropa</Link>
            <Link className="li-App-header salud" to="/salud">Salud</Link>
        </nav>
        <CartWidget/>
        </header>
        </div>
       
    );
}

export default NavBar

