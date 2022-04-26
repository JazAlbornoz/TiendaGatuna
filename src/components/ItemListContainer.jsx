import React from 'react'
import './ItemListContainer.css';
import ItemList from './paginas/ItemList'
import ItemDetailContainer from './paginas/ItemDetailContainer'

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