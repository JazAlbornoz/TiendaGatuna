import React from 'react'
import './ItemListContainer.css';
//import Card from './Card.jsx';
import ItemList from './paginas/ItemList'

const ItemListContainer = () => {
    return (
        <>
        <div className='cardContainer'>
            <div><ItemList/></div>
        </div>
        </>
    );
}

export default ItemListContainer

/*
            <div className='cardDos'><ItemList/></div>
            <div className='cardTres'><Card/></div>
            <div className='cardCuatro'><Card/></div> */