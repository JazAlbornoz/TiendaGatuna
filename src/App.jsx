import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route, Navigate,} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="*" element={ <Navigate to="/"/> }/>
      <Route path="/" element={ <ItemListContainer/> }/>
      <Route path="productos/:categoria" element={ <ItemListContainer/> }/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;