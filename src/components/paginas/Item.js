import React, {useState} from 'react'

const Item = () => {

  const [producto, productos] = useState( 
    [{ id: 1, nombre: 'corbata', imagen:'./components/imagenes/producto_corbataGato.jpg', precio: 150, descripcion: 'corbata para gato con cuello de camisa', link: './PaginaProducto.jsx', stock: 5 },
     { id: 2, nombre: 'body', imagen:"./components/imagenes/producto_ropa_dos.jpg", precio: 350, descripcion: 'body para gato, varios colores', link: './PaginaProducto.jsx', stock: 3 },
     { id: 2, nombre: 'Cat chow adulto', imagen:"./components/imagenes/producto_catchow_dos.jpg", precio: 500, descripcion: 'alimento balanceado para gato. Sabor carne y pollo', link: './PaginaProducto.jsx', stock: 10 }]
)

    return (
        <div>
        {producto.map(item => <div className='cardBody'>
          <h2 key={item.id} className="cardTitle">{item.nombre}</h2>
          <img src={item.imagen}/>
          <h3 className="cardPrecio">{item.precio}</h3>
          <p className="cardDesc">{item.descripcion}</p>
          <p className='cardStock'>Stock: {item.stock}</p>
          <button className='verMasBotonCard' href={item.link}>Ver Detalles</button>
          </div>)}
       </div>
    );
}

export default Item



  
