import React from 'react'
import { useState, useContext } from 'react';
import Cart from '../Cart';
import { CartContext } from '../../context/cart';

const Navbar = () => {
    const [showModal, setshowModal] = useState(false);
    const { cartItems } = useContext(CartContext)

    const toggle = () => {
        setshowModal(!showModal);
    };

    return (
        <div className='flex justify-between items-center px-20 py-5'>
            <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Shop</h1>
            {/* <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Cart</h1> */}
            {!showModal && <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                onClick={toggle}
            >Cart ({cartItems.length})</button>}
            <Cart showModal={showModal} toggle={toggle} />
        </div>
    );
}

export default Navbar;