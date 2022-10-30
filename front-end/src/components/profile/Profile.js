import React, { useState } from 'react';
import './Profile.css'

function Profile() {
    const [Username, setUsername] = useState('');

    const ProfileData = async ()=>{
        let result = await fetch('http://localhost:5000/profile',{
            method:'get',
            headers: {
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        setUsername(result.username);
    }
    const CartItems='';

    ProfileData();
    
  return (
    <div className="profile-container container">
        <div className="profile-image">
            <img id = "user-img" src="../images/user.png" alt="User" />
        </div>


        <div className="profile-content">
           {Username}
        </div>
        
        <div className="cart-container container d-flex align-items-center justify-content-center">
            Items in your Cart: {CartItems}
        </div>

    </div>
  )
}

export default Profile;