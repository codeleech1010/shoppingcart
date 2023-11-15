import React from 'react';
import './App.css';
import Cart from './components/Cart';
import Product from './components/Product';
import products from './components/ProductList';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <div className='container mx-auto p-4 md:p-8 lg:p-10'>
        <h1 className='text-3xl font-bold text-red-500 mb-4'>UptownLane</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
