import React from 'react'
import Item from './Item';
import { producto } from './Item';


const ItemList = () => {

    return (
            <div><div className='d-flex align-content-center flex-xl-wrap'>
        {producto.map(item => <div className='cardBody'>
          <h2 key={item.id} className="cardTitle">{item.nombre}</h2>
          <img src={item.imagen}/>
          <h3 className="cardPrecio">{item.precio}</h3>
          <p className="cardDesc">{item.descripcion}</p>
          <p className='cardStock'>Stock: {item.stock}</p>
          <button className='verMasBotonCard' onClick={item.link}>Ver Detalles</button>
          </div>)}
       </div></div>
           );
}

export default ItemList