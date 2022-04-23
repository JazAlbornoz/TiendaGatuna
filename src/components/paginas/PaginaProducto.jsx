import React, {useState} from 'react';

const PaginaProducto = () =>{

 const [count, setCount] = useState(0)

 const actualizarValores = () =>{
  setCount(count+1)
}
const restarValores = () =>{
  setCount(count-1)
}

    return(
      <div>
        <div className='onClick' onClick={() => actualizarValores()}>Haz click aquí</div>
        <div className='contador'>{count}</div>
        <div className='onClickDos' onClick={() => restarValores()}>Haz click aquí</div>
      </div>
    );
  }

export default PaginaProducto                 