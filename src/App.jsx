import { useEffect } from 'react'
import './App.css'
import Cart from './components/Cart'
import Product from './components/Product'
import { CartProvider } from './contexts/CartContext'


const products = [
  {id:1, name: 'Product 1', price: 10},
  {id:2, name: 'Product 2', price: 12},
  {id:3, name: 'Product 3', price: 15},
  {id:4, name: 'Product 4', price: 20},
  {id:5, name: 'Product 5', price: 22},
  {id:6, name: 'Product 6', price: 24},
  {id:7, name: 'Product 7', price: 25},
  {id:8, name: 'Product 8', price: 30},
  {id:9, name: 'Product 9', price: 35},
]


function App() {

  return (
    <CartProvider>
      <div className='container mx-auto p-4'>
        <h1 className=' text-3xl font-bold mb-4'>Shopping App</h1>
        <div className=' grid grid-cols-3 gap-4'>
          {products.map((product) =>(
            <Product key={product.id} product={product} />
          ))}
        </div>
        <Cart />
      </div>
    </CartProvider>
  )
}

export default App
