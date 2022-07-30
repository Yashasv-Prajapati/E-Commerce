import React, { useState } from 'react';
import './Card.css';

function Card() {

  const [productName, setProductName] = useState('Mobile Phonedgangkoqgkrnjoierjgnajghjagklajkflganklngklnkanknkasnklgnkngjnnnklgnkernklnogjnkjnrgsajngipa');
  const [productPrice, setProductPrice] = useState('9999');
  const [productDeliveryType, setProductDeliveryType] = useState('Free Delivery') 

  return (
    <div className="card-container">

        <div className="card-image">
            <img src="../mobile.webp" alt="cardImage" />
        </div>

        <div className="card-content">

          <p className="product-name">
            {productName}
          </p>
          <div className="product-price">
            ₹{productPrice}
          </div>

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