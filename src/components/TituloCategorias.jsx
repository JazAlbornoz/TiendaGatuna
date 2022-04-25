import React from 'react';

const TituloCategorias = (props) =>{

  let {titulo} = props

    return(
      <div>
        <h2 className="categoriasTitulos">{titulo}</h2>
      </div>
    );
  }

export default TituloCategorias