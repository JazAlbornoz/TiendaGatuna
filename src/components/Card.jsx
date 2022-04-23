import React from 'react'
import ImgProducto from './ImgProducto';
import NomProducto from './NomProducto';
import PaginaProducto from './paginas/PaginaProducto';

const Card = () => {

    return (
        <div className='cardBody'>
            <NomProducto nombre="Titulo del producto"/>
            <ImgProducto/>
            <NomProducto precio="$150" descripcion="Acá va la descripción del producto"/>
            <button  className='verMasBotonCard'><a href="">Ver más</a></button>
            <PaginaProducto/>
        </div>
       
    );
}

export default Card
