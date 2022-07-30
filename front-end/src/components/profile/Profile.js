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
    ProfileData();
    
  return (
    <div className="profile-container">
        <div className="profile-image">
            <img id = "user-img" src="../user.png" alt="User" />
        </div>

        <div className="profile-content">
           {Username}
        </div>

    </div>
  )
}

export default Profile;