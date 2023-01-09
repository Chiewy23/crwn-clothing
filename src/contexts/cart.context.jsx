import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
});

const addCartItem = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(item => item.id === itemToAdd.id);

    if (existingItem) {
        return cartItems.map(item => {
            return item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item;
        })
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (itemToAdd) => {
        setCartItems(addCartItem(cartItems, itemToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems}

    return (
        <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    );
};