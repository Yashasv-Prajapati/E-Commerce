import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import {}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Update.css'

function Update() {
    
    const [NewProductName, setNewProductName] = useState('');
    const [NewProductBrand, setNewProductBrand] = useState('');
    const [NewProductPrice, setNewProductPrice] = useState(0);
    const [NewProductDeliveryType, setNewProductDeliveryType] = useState('');
    const [DeliveryType, setDeliveryTypeDropDownText] = useState('');
    
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();

    const UpdateProductData= async ()=>{
        let url = 'http://localhost:5000/update';
        let data = await fetch(url, {
            method: 'put',
            body: JSON.stringify({id, NewProductName, NewProductBrand, NewProductPrice, NewProductDeliveryType}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        data = await data.json();
        setNewProductName(data.productName);
        console.log(data.productName);
        navigate('/products');
    }
    
    
    useEffect(()=>{
        getProductDetails();
    }, []);
    

    const getProductDetails = async()=>{
        let url = 'http://localhost:5000/find-product-to-update/'+id;
        let findProduct = await fetch(url, {
            method:'get',
            headers:{
                'Content-Type':'application/json'
            }
        });
        findProduct = await findProduct.json();
        console.log(findProduct);
        setNewProductName(findProduct.productName);
        setNewProductBrand(findProduct.productBrand);
        setNewProductPrice(findProduct.productPrice);
        setNewProductDeliveryType(findProduct.productDeliveryType);
        setDeliveryTypeDropDownText(findProduct.productDeliveryType);
    }

  return (
    <div className="update-container container">
      <h1>Update Data</h1>

      <div className="product-name-box">
        <label htmlFor="product-name">
          New Product Name
          <FontAwesomeIcon icon="coffee"/>
        </label>
        <input onChange = {(event)=>setNewProductName(event.target.value)} value ={NewProductName}  type="text" />
      </div>

      <div className="product-brand-box">
        <label htmlFor="product-brand">
          New Product Brand
        </label>
        <input onChange = {(event)=>setNewProductBrand(event.target.value)} value ={NewProductBrand} type="text" />
      </div>
      
      <div className="product-price-box">
        <label htmlFor="product-price">
          New Product Price
        </label>
        <input onChange = {(event)=>setNewProductPrice(event.target.value)} value ={NewProductPrice} type="number" />
      </div>

      {/* <div className="product-delivery-type-box">
        <label htmlFor="product-delivery-type">
          New Product Delivery Type
        </label>
        <input onChange = {(event)=>setNewProductDeliveryType(event.target.value)} value ={NewProductDeliveryType} type="text" />
      </div> */}

      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{DeliveryType}</button>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" onClick={()=>{setNewProductDeliveryType('Free Delivery'); setDeliveryTypeDropDownText('Free Delivery')}} >Free Delivery</a></li>
            <li><a className="dropdown-item" onClick={()=>{setNewProductDeliveryType('₹30 Delivery'); setDeliveryTypeDropDownText('₹30 Delivery')}} >₹30 Delivery</a></li>
        </ul>
    </div>

      <div className="update">
        <button onClick={UpdateProductData} id={params.id} className="update-btn">
          Update
        </button>
      </div>
    </div>
  );
}

export default Update;
