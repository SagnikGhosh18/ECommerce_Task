import { useState, useEffect } from 'react'
import Card from '../ProductCard'

export default function Products() {
  const [products, setProducts] = useState([])

  async function getProducts() {
    const response = await fetch('https://localhost:5000/products')
    const data = await response.json()
    setProducts(data.products)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='flex flex-col justify-center bg-gray-100'>
      <div className='flex justify-between items-center px-20 py-5'>
        <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Shop</h1>
        <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Cart</h1>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
        {
          products.map(product => (
            <Card product={product} />
          ))
        }
      </div>
    </div>
  )
}