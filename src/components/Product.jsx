import React from 'react'
import { useCart } from '../contexts/CartContext'

const Product = ({product}) => {

    const { addItemToCart } = useCart();

  return (
    <div className='bg-white p-4 rounded shadow'>
        <h2 className='text-lg font-semibold mb-2 text-gray-600'>{product.name}</h2>
        <p className='text-gray-600'>${product.price}</p>
        <button onClick={() => addItemToCart(product)} className='text-red-600'>Add to cart</button>
    </div>
  )
}

export default Product