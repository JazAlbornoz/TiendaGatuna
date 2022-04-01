import React from 'react'
import logo from './nuevo_gato_negro_logo.webp';

const NavBar = () => {
    return (
        <div>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Title-App-header">El Gato Negro</p>
        <ul className="Items-App-header">
            <li className="li-App-header comida">Comida</li>
            <li className="li-App-header ropa">Ropa</li>
            <li className="li-App-header salud">Salud</li>
            <li className="li-App-header blog">Blog Gatuno</li>
        </ul>
        </header>
        </div>
       
    );
}

export default NavBar