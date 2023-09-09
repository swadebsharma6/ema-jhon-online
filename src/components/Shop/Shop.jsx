import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
   
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } 
    , []);

    const [cart, setCart] = useState([]);

    const handleAddToCart = (id) =>{
        console.log('clicked ', id);
        const newCart = [...cart, products];
        setCart(newCart);
    }
    
    return (
        <div className='shop-container'>
            <div className="">
            <div className='products-container'>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
            }
           </div>
            </div>
            <div className="cart-container">
              <div className='cart-box'>
              <h4>Order Summary</h4>
              <h5>Selected items: {cart.length}</h5>
              </div>
            </div>
        </div>
    );
};

export default Shop;