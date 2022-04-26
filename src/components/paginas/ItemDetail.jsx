import React from 'react'
import { producto } from './Item';

const ItemDetail = () => {
 

    return (
        <>
        <div className='d-flex align-content-center flex-xl-wrap'>
        {producto.map(item => <div className='cardBody'>
          <img src={item.imagen}/>
          <h2 key={item.id} className="cardTitle">{item.nombre}</h2>
          <h3 className="cardPrecio">{item.precio}</h3>
          <p className="cardDesc">{item.descripcion}</p>
          <p className='cardStock'>Stock: {item.stock}</p>
          </div>)}
       </div>
        </>
    );
}

export default ItemDetail
