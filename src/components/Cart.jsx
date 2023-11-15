import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cart, removeItemFromCart, clearCart, handleQuantityChange, QuantityIncrement, QuantityDecrement, buyProducts } = useCart();

  const value = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='bg-white p-4 rounded shadow'>
      <h2 className='text-lg font-semibold mb-4 text-gray-600'>Order Summary</h2>
      <ul className='list-disc list-inside'>
        {cart.map((item) => (
          <li key={item.id} className='mb-4 text-gray-600 flex flex-col lg:flex-row lg:items-center'>
            <div className='lg:w-2/3 lg:mr-4'>
              <p>
                {item.title} - ${item.price * item.quantity}
              </p>
            </div>
            <div className='flex items-center mt-2 lg:mt-0'>
              <button onClick={() => QuantityDecrement(item.id)} className='border w-8 h-8 rounded border-slate-400 text-red-300'>
                -
              </button>
              <input
                type='number'
                value={item.quantity}
                readOnly
                onChange={handleQuantityChange}
                className='w-8 h-8 mx-2 text-center'
              />
              <button onClick={() => QuantityIncrement(item.id)} className='border w-8 h-8 rounded border-slate-400 text-red-300'>
                +
              </button>
              <button onClick={() => removeItemFromCart(item.id)} className='border ml-4 rounded border-slate-400 text-red-300'>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className='mt-4'>
        <p>Total Value: ${value}</p>
      </div>

      <div className='flex flex-col justify-center lg:flex-row mt-4'>
        <button onClick={buyProducts} className='bg-red-500 text-white px-4 py-2 rounded mb-2 lg:mb-0 lg:mr-2 hover:bg-red-600'>
          Buy
        </button>
        <button onClick={clearCart} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
