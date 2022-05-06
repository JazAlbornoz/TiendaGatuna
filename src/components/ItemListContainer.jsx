import { useEffect, useState } from 'react'
import './ItemListContainer.css';
import { ItemList } from './paginas/ItemList'
import { useParams } from 'react-router-dom';
import { pedirDatos } from './paginas/pedirDatos';

const ItemListContainer = () => {

const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(false)

const {categoryId} = useParams()

console.log(categoryId)

useEffect(() =>{
    setLoading(true)

    pedirDatos()
      .then((res) => {
          if(!categoryId){
            setProductos(res)
        } else {
            setProductos(res.filter((prod) => prod.categoria === categoryId))
            console.log(res.filter((prod) => prod.categoria === categoryId))
        }
      })
      .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        setLoading(false)
    })
}, [categoryId])

    return (
        <>
        {
                loading
                    ? <h2>Cargando...</h2> 
                    : <ItemList productos={productos}/>
            } 
        </>
    );
}

export default ItemListContainer
