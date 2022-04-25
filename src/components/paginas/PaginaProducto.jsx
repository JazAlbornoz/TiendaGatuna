import React, {useState} from 'react';

const PaginaProducto = () =>{

 const [count, setCount] = useState(0)

 const sumarValores = () =>{
  setCount(count+1)
}
const restarValores = () =>{
  setCount(count-1)
}

    return(
      <>
      <div className='divCantidad'>
        <div className='onClickSumar' onClick={() => sumarValores()}>+</div>
        <div className='cantidad'>Cantidad: {count}</div>
        <div className='onClickRestar' onClick={() => restarValores()}>-</div>
      </div>
      </>
    );
  }

export default PaginaProducto  