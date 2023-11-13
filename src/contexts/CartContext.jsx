import React, { createContext, useContext, useState } from "react";
import products from "../components/ProductList";

const CartContext = createContext()

export function CartProvider({children}) {

    const [cart, setCart] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [productInModal, setProductInModal] = useState(null)



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
      
      const handleQuantityChange = (itemId, event) =>{
        const updatedItem = cart.map((item) =>
        item.id === itemId ? {...item, quantity: parseInt(event.target.value, 10)} : item)
          setCart(updatedItem)
        }
        
        const QuantityIncrement = (itemId) => {
          const updatedItem = cart.map((item) =>
          item.id === itemId ? {...item, quantity: item.quantity + 1}:item)
            setCart(updatedItem)
          }

    const QuantityDecrement = (itemId) => {
        const updatedItem = cart.map((item) =>
         item.id === itemId && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item)
        setCart(updatedItem)
    }

    const buyProducts = () => {
        alert("Thank You for buying!")
    }

    const openModal = (product) => {
      setProductInModal(product)
      setIsModalOpen(!isModalOpen)
    }

    const closeModal = () => {
      setIsModalOpen(false)
    }

    return (
        <CartContext.Provider
        value={{
             cart,
             addItemToCart,
             removeItemFromCart,
             clearCart,
             handleQuantityChange,
             QuantityIncrement,
             QuantityDecrement,
             buyProducts,
             openModal,
             closeModal,
             isModalOpen,
             productInModal,
          
            }}
        >
            {children}

        </CartContext.Provider>
    )

}

export function useCart(){
    return useContext(CartContext)
}