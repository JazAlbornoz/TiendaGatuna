import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navBar';

function App() {
  return (
    <>
    <NavBar/>
    <h2 className='categoriasInicio'>Comida</h2>
    <ItemListContainer/>

    <h2 className='categoriasInicio'>Ropa</h2>
    <ItemListContainer/>

    <h2 className='categoriasInicio'>Salud</h2>
    <ItemListContainer/>
    </>
  );
}

export default App;
