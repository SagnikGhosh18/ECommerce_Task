import React from 'react'

const Card = ({ product, addToCart }) => {
    return (
        <div key={product.id} className='bg-white shadow-md rounded-lg px-10 py-10'>
            <img src={product.image} alt={product.title} className='rounded-md h-48' />
            <div className='mt-4'>
                <h1 className='text-lg uppercase font-bold'>{product.title.slice(0,20)}...</h1>
                {/* <p className='mt-2 text-gray-600 text-sm'>{product.description.slice(0, 40)}...</p> */}
                <p className='mt-2 text-gray-600 text-sm'>{product.rating}</p>
                <p className='mt-2 text-gray-600'>₹{product.amount}</p>
            </div>
            <div className='mt-6 flex justify-between items-center'>
                <button><ion-icon name="heart-outline" style={styles}></ion-icon></button>
                <button onClick={() => addToCart(product)}><ion-icon name="cart-outline" style={styles}></ion-icon></button>
            </div>
        </div>
    )
}
const styles = {
    "font-size": "27px"
}
export default Card;