import React, { createContext, useContext, useEffect, useState } from "react";

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


    // useEffect(() => {
    //     const cart = JSON.parse(localStorage.getItem("cart"))
    //     if(cart && cart.length > 0 ) {
    //         setCart(cart)
    //     }
    //   }, [])

    //   useEffect(() => {
    //     localStorage.setItem('cart', json.stringify(cart))
      
    //   }, [cart])
      

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