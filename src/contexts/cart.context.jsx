import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0
});

const addCartItem = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(item => item.id === itemToAdd.id);

    if (existingItem) {
        return cartItems.map(item => {
            return item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item;
        });
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }]
};

const removeCartItem = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find(item => item.id === itemToRemove.id);

    if (existingItem.quantity === 1) {
        return cartItems.filter(item => item.id !== itemToRemove.id);
    }

    return cartItems.map(item => {
        return item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item;
    });
};

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemToCart = (itemToAdd) => {
        setCartItems(addCartItem(cartItems, itemToAdd));
    };

    const removeItemFromCart = (itemToRemove) => {
        setCartItems(removeCartItem(cartItems, itemToRemove));
    };

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, cartItems, cartCount}

    return (
        <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    );
};