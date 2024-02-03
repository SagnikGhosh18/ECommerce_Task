import React from 'react'

const Card = ({ product }) => {
    return (
        <div key={product.id} className='bg-white shadow-md rounded-lg px-10 py-10'>
            <img src={product.image} alt={product.title} className='rounded-md h-48' />
            <div className='mt-4'>
                <h1 className='text-lg uppercase font-bold'>{product.title}</h1>
                <p className='mt-2 text-gray-600 text-sm'>{product.description.slice(0, 40)}...</p>
                <p className='mt-2 text-gray-600'>${product.amount}</p>
            </div>
            <div className='mt-6 flex justify-between items-center'>
                <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>Add to cart</button>
            </div>
        </div>
    )
}

export default Card;