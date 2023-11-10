import React from 'react'
import { useCart } from '../contexts/CartContext'

const Cart = () => {

    const {cart, removeItemFromCart, clearCart, handleQuantityChange, QuantityIncrement, QuantityDecrement, buyProducts} = useCart()

    const value = cart.reduce((total, item) => total + item.price * item.quantity, 0)
    
  return (
    <div className='bg-white p-4 rounded shadow'>
        <h2 className='text-lg font-semibold mb-2 text-gray-600'>Order Summary</h2>
        <ul className='list-disc list-inside'>
            {cart.map((item) => (
                <li key={item.id} className='mb-2 text-gray-600'>
                    {item.title} - ${item.price*item.quantity}
                    <button onClick={() => QuantityIncrement(item.id)} className='border w-5 h-6 rounded border-slate-400 text-red-300'> + </button>
                    <input type='number'
                     value={item.quantity} 
                     readOnly
                     onChange={handleQuantityChange} 
                     className='w-8 h-6'/>
                    <button onClick={() => QuantityDecrement(item.id)} className='border w-5 h-6 rounded border-slate-400 text-red-300'> - </button>
                    <button onClick={() => removeItemFromCart(item.id)} className='border  rounded border-slate-400 text-red-300'> Remove </button>
                </li>
            ))}
        </ul>

                <div>
                    <p>Total Value: ${value}</p>
                </div>

        <button onClick={buyProducts} className='bg-red-500 text-white px-4 py-2 mx-2 rounded mt-4 hover:bg-red-600'>Buy</button>
        <button onClick={clearCart} className='bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600'>Clear Cart</button>
    </div>
  )
}

export default Cart