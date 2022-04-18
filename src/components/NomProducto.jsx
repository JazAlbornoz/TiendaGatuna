import React from 'react';

const NomProducto = (props) =>{

  let {nombre, descripcion} = props

    return(
      <div>
        <h2 className="cardTitle">{nombre}</h2>
        <p className="cardDesc">{descripcion}</p>
      </div>
    );
  }

export default NomProducto
