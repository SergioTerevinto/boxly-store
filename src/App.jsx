import './App.css'
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CartPage from './components/CartPage'
import { useEffect, useState } from 'react'
import { getItems } from './firebase/db.js'
import Checkout from './components/Checkout.jsx'


function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((data) => setItems(data)).catch((error) => console.error('Error al obtener productos:', error));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer text="LO MÁS VENDIDO" items={items} />} />
        <Route path='/category/:id' element={<ItemListContainer text="CATEGORÍA" items={items} />} />
        <Route path='/product/:id' element={<ItemDetailContainer text="PRODUCTO" />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
