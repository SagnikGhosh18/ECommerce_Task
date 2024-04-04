import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FavouritesContext } from '../../context/favorites';


const Card = ({ product, addToCart }) => {

    const favContext = useContext(FavouritesContext);
    const isFavourtite = favContext.ids.includes(product.id)

    console.log(favContext.ids)

    const route = `/products/${product.id}`;
    const [name, setName] = useState("heart-outline");

    const favHandler = () => {
        if (isFavourtite) {
            favContext.removeFavorite(product.id)
            setName("heart-outline")
        } else {
            favContext.addFavorite(product.id)
            setName("heart")
        }
    }

    return (
        <div key={product.id} className='bg-white shadow-md rounded-lg px-10 py-10'>
            <Link to={route}>
                <img src={product.image} alt={product.title} className='rounded-md h-48' />
            </Link>
            <div className='mt-4'>
                <h1 className='text-lg uppercase font-bold'>{product.title.slice(0,20)}...</h1>
                <p className='mt-2 text-gray-600 text-sm'>{product.rating}</p>
                <p className='mt-2 text-gray-600'>₹{product.amount}</p>
            </div>
            <div className='mt-6 flex justify-between items-center'>
                <button onClick={favHandler}><ion-icon name={name} style={styles}></ion-icon></button>
                <button onClick={() => addToCart(product)}><ion-icon name="cart-outline" style={styles}></ion-icon></button>
            </div>
        </div>
    )
}
const styles = {
    "font-size": "27px"
}
export default Card;