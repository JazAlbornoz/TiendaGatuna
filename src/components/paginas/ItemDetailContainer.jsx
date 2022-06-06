import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { pedirDatos } from './pedirDatos';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)
    
    const {itemId} = useParams()
    
    console.log(itemId)
    
    useEffect(() =>{
        setLoading(true)
    
        pedirDatos()
          .then((res) => {
              if(!itemId){
                setItem(res)
            } else {
                setItem(res.find((prod) => prod.id === Number (itemId)))
                console.log(res.find((prod) => prod.id === Number (itemId)))
            }
          })
        .finally(() => {
            setLoading(false)
        })
    }, [itemId])

return (
    <>
    {
                loading
                    ? <h2>Cargando...</h2> 
                    : <ItemDetail {...item}/>
            } 
    </>
    );
}

export default ItemDetailContainer
