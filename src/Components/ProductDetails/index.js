import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/cart';
import { useParams } from 'react-router-dom';


export const Product = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();

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

    useEffect(()=>{
        getProducts();
    }, []);

    const { addToCart } = useContext(CartContext);

    let product = products.filter(product => product.id === id);
    console.log(product);
    console.log(id);
    return (
        <>
            <div className="card-right">
                <p>{id}</p>
            </div>
        </>
    )
}
