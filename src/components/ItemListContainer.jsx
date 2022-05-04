import { useEffect, useState } from 'react'
import './ItemListContainer.css';
import { ItemList } from './paginas/ItemList'
import { useParams } from 'react-router-dom';
import { pedirDatos } from './paginas/pedirDatos';

const ItemListContainer = () => {

const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(false)

const {categoria} = useParams()

console.log(categoria)

useEffect(() =>{
    setLoading(true)

    pedirDatos()
      .then((res) => {
          if(!categoria){
          setProductos(res)
        } else {
          setProductos(res.filter((prod)=> prod.categoria === categoria))
        }
      })
      .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        setLoading(false)
    })
}, [])

    return (
        <>
        <div className='cardContainer'>
        </div>
        {
                loading 
                    ? <h2>Loading...</h2> 
                    : <ItemList productos={productos}/>
            } 
        </>
    );
}

export default ItemListContainer
