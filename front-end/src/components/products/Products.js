import React, { useEffect, useState } from 'react';
import './Products.css';
import ProductCard from '../cards/ProductCard';

function Products() {

    const [productList, setProducts] = useState([]);

    useEffect(()=>{
        getProductList();
    }, []);

    const getProductList = async ()=>{
        
        let productList = await fetch('http://localhost:5000/products', {
            method:"get",
            headers:{
                'Content-Type':'application/json'
            }
        });
        productList = await productList.json();
        setProducts(productList);
    }


  return (
    <div className="products-container">
        {
            productList.map((product)=>(
                <ProductCard productName = {product.productName} 
                productPrice = {product.productPrice}
                productBrand = {product.productBrand}
                productDeliveryType = {product.productDeliveryType}
                />
            ))
        }
    </div>
    )
}

export default Products;