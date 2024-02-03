import { useState, useEffect, useContext } from 'react'
import Card from '../ProductCard'
import { CartContext } from '../../context/cart';


export default function Products() {
  
  const [products, setProducts] = useState([])
  const { addToCart } = useContext(CartContext)

  async function getProducts() {
    try {
      const response = await fetch('http://localhost:5000/products'); // Ensure correct protocol
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
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
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 py-10'>
        {
          products.map(product => {
            return(
              <Card product={product} addToCart={addToCart} />
            )
        })
        }
      </div>
    </div>
  )
}