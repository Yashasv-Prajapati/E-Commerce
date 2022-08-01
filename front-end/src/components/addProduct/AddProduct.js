import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [productDeliveryType, setProductDeliveryType] = useState('');
    const [DeliveryType, setDeliveryTypeDropDownText] = useState('Delivery Type');
    const navigate = useNavigate();

    const addProduct = async ()=>{
        let AddProduct = await fetch('http://localhost:5000/add', {
            method:'post',
            body:JSON.stringify({productName, productPrice, productBrand, productDeliveryType}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        // AddProduct = await AddProduct.json();
        navigate('/products');
    }

  return (
    <div className="container">
        <h1>Enter Product Details</h1>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Product Name</span>
            <input onChange={(event)=>{setProductName(event.target.value)}} type="text" className="form-control" placeholder="Product Name" aria-label="ProductName" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">₹</span>
                <input onChange={(event)=>{setProductPrice(event.target.value)}} type="number" className="form-control" aria-label="Amount (to the nearest Rupees)" />
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Product Brand</span>
            <input onChange={(event)=>{setProductBrand(event.target.value)}} type="text" className="form-control" placeholder="Product Brand" aria-label="Brand" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{DeliveryType}</button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={()=>{setProductDeliveryType('Free Delivery'); setDeliveryTypeDropDownText('Free Delivery')}} >Free Delivery</a></li>
                <li><a className="dropdown-item" onClick={()=>{setProductDeliveryType('₹30 Delivery'); setDeliveryTypeDropDownText('₹30 Delivery')}} >₹30 Delivery</a></li>
            </ul>
        </div>

        <div className="input-group mb-3">
            <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
        </div>

    </div>
  )
}

export default AddProduct;