import React from 'react';
import { pedirDatos } from './pedirDatos';


const ItemDetailContainer = () => {

    const datos = {pedirDatos}

return (
    <>
    <button onClick={datos}>Ver Promesa</button>
    </>
    );
}

export default ItemDetailContainer
