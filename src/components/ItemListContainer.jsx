import React from 'react'
import './ItemListContainer.css';
import Card from './Card.jsx';

const ItemListContainer = () => {
    return (
        <>
        <div className='cardContainer'>
            <div className='cardUno'><Card/></div>
            <div className='cardDos'><Card/></div>
            <div className='cardTres'><Card/></div>
            <div className='cardCuatro'><Card/></div>
        </div>
        </>
    );
}

export default ItemListContainer