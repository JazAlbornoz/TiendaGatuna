import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route, Navigate,} from "react-router-dom";
import ItemDetailContainer from './components/paginas/ItemDetailContainer';
//import Ropa from "./components/paginas/Ropa"
//import Salud from "./components/paginas/Salud"
//import Comida from "./components/paginas/Comida"

function App() {
  return (
    <>
    <BrowserRouter>

    <NavBar/>

    <Routes>
      <Route path="/" element={ <ItemListContainer/> }/>
      <Route path="/productos/:categoryId" element={ <ItemListContainer/> } />
      <Route path="/productos/:itemId" element={ <ItemDetailContainer/> } />
      <Route path="*" element={ <Navigate to="/"/> }/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;