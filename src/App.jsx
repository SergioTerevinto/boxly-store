import './App.css';
import Navbar from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router";


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer text="LO MAS VENDIDO"/>} />
          <Route path='/category/:id' element={<ItemListContainer text="CATEGORIA"/>} />
          <Route path='/product/:id' element={<ItemDetailContainer text="PRODUCTO"/>} />
        </Routes>
        </BrowserRouter>
  
    )
}

export default App;