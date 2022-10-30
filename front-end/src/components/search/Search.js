import React, { useState, useEffect } from 'react'
import ProductCard from '../cards/ProductCard';

function Search() {

    const [productName, setProductName] = useState('');
    const [searchedList, setSearchedList] = useState([]);



    const SearchProducts = async ()=>{
        let url = 'http://localhost:5000/search/'+productName;
        let searched = await fetch(url,{
            method:'get',
            headers:{
                'Content-Type':'application/json'
            }
        });

        searched = await searched.json();

        if(searched.length !=0 ){
            console.log("Non Zero");
        }else{
            console.log("Zero hai bey");
        }

        console.log("Yes Worling");
        
        setSearchedList(searched);

    }

  return (
    <div className="search-container container">
        <label htmlFor="search">Search for Products</label>
        <input type="text" onChange={(event)=>{setProductName(event.target.value)}} name="search" id="search" />
        <button onClick={SearchProducts} className="search">
            Search
        </button>

        {
            searchedList.map((product)=>(
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

export default Search;