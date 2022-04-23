import React from 'react';

const NomProducto = (props) =>{

  let {nombre, precio, descripcion} = props

    return(
      <div>
        <h2 className="cardTitle">{nombre}</h2>
        <h3 className="cardPrecio">{precio}</h3>
        <p className="cardDesc">{descripcion}</p>
      </div>
    );
  }

export default NomProducto
