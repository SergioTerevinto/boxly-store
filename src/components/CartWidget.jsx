import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
    const { cartQuantity } = useCart();

    return (
        <Link to="/cart" style={{ textDecoration: 'none' }}>
            <div className="cart-widget-container">
                <FaShoppingCart size={30} color="white" />
                {cartQuantity > 0 && (
                    <span className="cart-widget-bubble" style={{ backgroundColor: 'red', color: 'white' }}>
                        {cartQuantity}
                    </span>
                )}
            </div>
        </Link>
    );
}

export default CartWidget;
