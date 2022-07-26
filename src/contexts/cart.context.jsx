import { createContext, useState } from "react";

const addCartItem = (cartItems, product) => {

    const productAlreadyExists = cartItems.find((item) => item.id === product.id)
    if (productAlreadyExists) {
        return cartItems.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
    }
    return [...cartItems, { ...product, quantity: 1 }]
}



const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    totalItems: 0
});
const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);

    const addItemToCart = async (product) => {
        setCartItems(addCartItem(cartItems, product))
        const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)
        await setTotalItems(totalQuantity)
        console.log('totalItems', totalItems);
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, totalItems }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

export {
    CartContext,
    CartProvider
}