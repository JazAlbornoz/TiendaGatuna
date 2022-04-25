import React from 'react'
import ImgProducto from './ImgProducto';
import NomProducto from './NomProducto';
//import ItemList from './paginas/ItemList';

const Card = () => {

    return (
        <div className='cardBody'>
            <NomProducto nombre="Titulo del producto"/>
            <ImgProducto/>
            <NomProducto precio="$150" descripcion="Acá va la descripción del producto"/>
            <button  className='verMasBotonCard' href="">Ver más</button>
        </div>
       
    );
}

export default Card
