import React from 'react'
import cart from './cart.svg';

const CartWidget = () => {
    return (
        <img src={cart} className="App-cartIcon" alt="cart" />
    );
}

export default CartWidget