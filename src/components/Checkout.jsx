import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { addDoc, collection } from "firebase/firestore";
import db from "../firebase/db"; 
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' });
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer,
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      date: new Date().toISOString(),
      total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  useEffect(() => {
    if (orderId) {
      const timeout = setTimeout(() => {
        navigate('/');
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [orderId, navigate]);

  return (
    <div style={{
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ textAlign: 'center', color: '#2d3b5a' }}>Finalizar Compra</h2>

      {orderId ? (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <h3 style={{ color: '#4caf50' }}>¡Orden creada con éxito! 🎉</h3>
          <p style={{ fontSize: '1.2rem' }}>
            Tu número de orden es: <strong>{orderId}</strong>
          </p>
          <p style={{ marginTop: '1rem', color: '#777' }}>
            Serás redirigido al inicio en unos segundos...
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label>
            Nombre:
            <input name="name" value={buyer.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input name="email" type="email" value={buyer.email} onChange={handleChange} required />
          </label>
          <label>
            Celular:
            <input name="phone" value={buyer.phone} onChange={handleChange} required />
          </label>
          <button type="submit" style={{
            padding: '10px',
            backgroundColor: '#2d3b5a',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Confirmar Pedido
          </button>
        </form>
      )}
    </div>
  );
}
