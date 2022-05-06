import React from 'react';
import { producto } from './productos';


const ItemToCart = () => {

    return (
            <div><div className='d-flex align-content-center flex-xl-wrap'>
            {producto.map(item => <div className='cardBody'>
              <h2 key={item.id} className="cardTitle">{item.nombre}</h2>
              <img src={item.imagen}/>
              <h3 className="cardPrecio">{item.precio}</h3>
              </div>)}
          
       </div></div>
           );
}

export default ItemToCart