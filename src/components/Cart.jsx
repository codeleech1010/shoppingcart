import React from 'react'
import { useCart } from '../contexts/CartContext'

const Cart = () => {

    const {cart, removeItemFromCart, clearCart} = useCart()

  return (
    <div className='bg-white p-4 rounded shadow'>
        <h2 className='text-lg font-semibold mb-2 text-gray-600'>Shopping Cart</h2>
        <ul className='list-disc list-inside'>
            {cart.map((item) => (
                <li key={item.id} className='mb-2 text-gray-600'>
                    {item.name} - ${item.price}
                    <button onClick={() => removeItemFromCart(item.id)} className='text-red-300'>remove</button>
                </li>
            ))}
        </ul>
        <button onClick={clearCart} className='bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600'>Clear Cart</button>
    </div>
  )
}

export default Cart