import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"

export default function CartPage() {
    const { cartItems, addToCart, cartQuantity, removeItem, clearCart } = useCart()

    const handleRemove = (id) => {
        removeItem(id)
    };

    const handleIncrease = (item) => {
        addToCart(item, 1)
    };

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            addToCart(item, -1)
        } else {
            removeItem(item.id)
        }
    };

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

    if (cartQuantity === 0) return <p>El carrito está vacío.</p>

    return (
        <div style={{ padding: "20px" }}>
            <h2>Tu Carrito</h2>
            {cartItems.map(item => (
                <div key={item.id} style={{
                    borderBottom: "1px solid #ccc",
                    padding: "10px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <div>
                        <strong>{item.name}</strong> <br />
                        ${item.price} x {item.quantity} = ${item.price * item.quantity}
                    </div>
                    <div>
                        <button onClick={() => handleDecrease(item)}>-</button>
                        <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                        <button onClick={() => handleIncrease(item)}>+</button>
                        <button onClick={() => handleRemove(item.id)} style={{ marginLeft: "15px" }}>Eliminar</button>
                    </div>
                </div>
            ))}

    <h3>Total: ${total}</h3>
        <button onClick={clearCart}>Vaciar Carrito</button>
        <Link to="/checkout">
        <button style={{ marginLeft: "10px" }}>Finalizar Compra</button>
        </Link>
        </div>
    )
}
