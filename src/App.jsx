import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route, Navigate,} from "react-router-dom";
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
      <Route path="/:categoryId" element={ <ItemListContainer/> }/>
      
      <Route path="*" element={ <Navigate to="/"/> }/>
    </Routes>

    </BrowserRouter>

    </>
  );
}

export default App;
/* 
      <Route path="/ropa" element={ <Ropa/> }/>
      <Route path="/salud" element={ <Salud/> }/>
      <Route path="/comida" element={ <Comida/> }/>*/