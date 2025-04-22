import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, quantity) => {
        setCartItems(prev => {
            const existingItem = prev.find(i => i.id === item.id);
            if (existingItem) {
                const newQty = existingItem.quantity + quantity;
                if (newQty <= 0) {
                    return prev.filter(i => i.id !== item.id);
                }
                return prev.map(i =>
                    i.id === item.id ? { ...i, quantity: newQty } : i
                );
            }
            return [...prev, { ...item, quantity }];
        });
    };

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeItem,
            clearCart,
            cartQuantity
        }}>
            {children}
        </CartContext.Provider>
    );
}
