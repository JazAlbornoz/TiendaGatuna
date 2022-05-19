import React from 'react'
import ItemCount from './ItemCount';
import { producto } from './productos';

const ItemDetail = () => {


    return (
            <div><div className='d-flex align-content-center flex-xl-wrap'>
            {producto.map(item => {<div className='cardBody'>
            <img src={item.imagen} alt={item.nombre}/>
            <h2 key={item.id} className="cardTitle">{item.nombre}</h2>
            <h3 className="cardPrecio">$ {item.precio}</h3>
            <p className="cardDesc">{item.descripcion}</p>
            <p className='cardStock'>Stock: {item.stock}</p>
            <ItemCount max={item.stock}/>
            </div>})}
          
       </div></div>
           );
}

export default ItemDetail

