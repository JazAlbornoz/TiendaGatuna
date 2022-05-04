import ItemCount from './ItemCount';
import { producto } from './productos';
import { Link } from 'react-router-dom';


const Item = () => {

    return (
            <div><div className='d-flex align-content-center flex-xl-wrap'>
            {producto.map(item => <div className='cardBody'>
              <h2 key={item.id} className="cardTitle">{item.nombre}</h2>
              <img src={item.imagen}/>
              <h3 className="cardPrecio">{item.precio}</h3>
              <p className="cardDesc">{item.descripcion}</p>
              <p>{item.categoria}</p>
              <p className='cardStock'>Stock: {item.stock}</p>
              <ItemCount/>
              <Link className='verMasBotonCard' to= {item.id}>Ver más</Link>
              </div>)}
          
       </div></div>
           );
}

export default Item
//{ producto.map( el => <div><Item key={el.id}/></div> )}