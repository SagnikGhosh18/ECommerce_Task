import { useState, useEffect } from 'react'
import Card from '../ProductCard'

export default function Products() {
  const [products, setProducts] = useState([])

  async function getProducts() {
    try {
      const response = await fetch('http://localhost:5000/products'); // Ensure correct protocol
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // const data = await response.json();
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
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