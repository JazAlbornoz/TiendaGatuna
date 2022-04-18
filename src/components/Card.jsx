import React from 'react'
import ImgProducto from './ImgProducto';
import NomProducto from './NomProducto';

const Card = () => {
    return (
        <div className='cardBody'>
            <ImgProducto/>
            <NomProducto nombre="Titulo del producto" descripcion="Acá va la descripción del producto"/>
        </div>
       
    );
}

export default Card
