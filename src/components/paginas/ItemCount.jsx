import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function ItemCount ({stock, initial, onAdd}) {

 const [count, setCount] = useState(initial)
 const [btnAdd, setBtnAdd] = useState(true)
 const [stockItems, setStockItems] = useState(stock)

 const sumarValores = () =>{
  count < stock && setCount(count+1)
 }
 const restarValores = () =>{
  count > 1 && setCount(count-1)
 }

  const addItem = () =>{
    onAdd(count)
    setBtnAdd(false)
    setStockItems(stockItems - count)
  }
  return(
    <>
    {stock > 0  && btnAdd &&
    <div className='divCantidad'>
      <div className='cantidad'>Cantidad: {count}</div>
      <div className='onClickRestar' onClick={() => restarValores()}>-</div>
      <div onClick={addItem}>Agregar al carrito</div>
      <div className='onClickSumar' onClick={() => sumarValores()}>+</div>
      <button as={Link} to="/">Seguir comprando</button>
      <button as={Link} to="/cart">Terminar compra</button>
    </div>
    }
    </>
  )
}

export default ItemCount
