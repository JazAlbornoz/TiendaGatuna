import React from 'react'
import ImgProd from './imagenes/producto_corbataGato.jpg';

function ImgProducto () {
  
    return(
        <img src={ImgProd} alt="Imagen del producto" className="cardImg" />
    );
  }

export default ImgProducto
