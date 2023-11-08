import React, { createContext, useContext, useState } from "react";

const CartContext = createContext()

export function CartProvider({children}) {
    const [cart, setCart] = useState([])

    const addItemToCart = (item) => {
        setCart([...cart, item])
    }

    const removeItemFromCart = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId)
        setCart(updatedCart)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider
        value={{
             cart,
             addItemToCart,
             removeItemFromCart,
             clearCart
            
            }}
        >
            {children}

        </CartContext.Provider>
    )

}

export function useCart(){
    return useContext(CartContext)
}