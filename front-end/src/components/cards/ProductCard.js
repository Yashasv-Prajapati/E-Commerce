import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductCard.css';

function Card(props) {
  const {productName, productPrice, productBrand, productDeliveryType, product_ID} = props;

  const [CartItems, setCartItems] = useState(0);
  const user = localStorage.getItem('user');
  console.log(productName);
  
  const CartItemCount = async ()=>{
    let result = await fetch('http://localhost:5000/add-to-cart',{
      method:'post',
      body:JSON.stringify({user,CartItems}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    result = await result.json();
    console.log(JSON.stringify({user,CartItems}));
    setCartItems(CartItems+1);
    console.log("hello");
    console.log(result);
  }

  const DeleteProduct = async()=>{
    let deleteResult = await fetch('http://localhost:5000/delete-product', {
      method:'delete',
      body:JSON.stringify({productName, productPrice, productBrand, productDeliveryType}),
      headers:{
        'Content-Type':'application/json'
      }
    });

    console.log(JSON.stringify({productName, productBrand, productPrice, productDeliveryType}));
    // deleteResult = await deleteResult.json();
    console.log(deleteResult);
    window.location.reload(false);
  }

  const navigate = useNavigate();

  const UpdateProduct=async ()=>{
    let url = '/update/'+product_ID;
    console.log(url);
    navigate(url);
  }
  
  
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
        
          <button onClick={CartItemCount} className="add-to-cart">
            Add To Cart
          </button>

          <button className="buy-now">
            Buy Now
          </button>

        </div>
        <div className="delete-container container">
          <button onClick = {DeleteProduct} className="delete">
            Delete
          </button>
          <button onClick = {UpdateProduct} className="delete">
            Update
          </button>
        </div>
    </div>
  )
}

export default Card;