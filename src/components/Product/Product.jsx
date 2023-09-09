import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    // console.log(product)
    const{id,img, name, price,seller,ratings} = product;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='box'>
            
            <h5>{name}</h5>
            <h4>Price: ${price}</h4>

            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} star</p>
            </div>
            <button onClick={()=>handleAddToCart(id)} className='btn'>Add to Cart <FontAwesomeIcon icon={ faShoppingCart} /></button>
        </div>
    );
};

export default Product;