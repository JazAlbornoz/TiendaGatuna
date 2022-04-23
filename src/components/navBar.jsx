import React from 'react'
import CartWidget from './CartWidget';
import logo from './imagenes/nuevo_gato_negro_logo.webp';

const NavBar = () => {
    return (
        <div>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Title-App-header">El Gato Negro</p>
        <ul className="Items-App-header">
            <li className="li-App-header comida"><a href=''>Comida</a></li>
            <li className="li-App-header ropa"><a href=''>Ropa</a></li>
            <li className="li-App-header salud"><a href=''>Salud</a></li>
            <li className="li-App-header blog"><a href='https://jazalbornoz.github.io/BlogGatuno/'>Blog Gatuno</a></li>
        </ul>
        <CartWidget/>
        </header>
        </div>
       
    );
}

export default NavBar