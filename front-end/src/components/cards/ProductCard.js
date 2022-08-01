import React, { useState } from 'react';
import './ProductCard.css';

function Card(props) {
  const {productName, productPrice, productBrand, productDeliveryType} = props;
  
  
  // const [productName, setProductName] = useState('Mobile Phonedgangkoqgkrnjoierjgnajghjagklajkflganklngklnkanknkasnklgnkngjnnnklgnkernklnogjnkjnrgsajngipa');
  // const [productPrice, setProductPrice] = useState('9999');
  // const [productDeliveryType, setProductDeliveryType] = useState('Free Delivery') 
  
  return (
    <div className="container my-3 py-2 card-container">

        <div className="card-image">
            <img src="../../../../images/iphone13.webp" alt="cardImage" />
        </div>

        <div className="card-content">

          <p className="product-name">
            {productName}
          </p>
          <div className="product-price">
            ₹{productPrice}
          </div>
          {productBrand}
          <br />
          {productDeliveryType}
        
          <button className="add-to-cart">
            Add To Cart
          </button>

          <button className="buy-now">
            Buy Now
          </button>

        </div>
    </div>
  )
}

export default Card;