import React from 'react';
import { Link, Navigate } from 'react-router-dom';

function Nav() {
    
    const authentication = localStorage.getItem('user'); //checks if there is something in the localStorage

    function logout(){
        if(authentication){ //checks if the user is logged in and then logs them out by deleting localStorage
            localStorage.removeItem('user');
            <Navigate to="/login" />
        }

        window.location.reload(false); //Reloads the page and updates the Navbar
    }

  return (
    <>

        {authentication ? <ul className='nav-ul'>

            <div className='nav-logo'>
                <li>
                    <img id="logo" src="../../images/logo.png" alt="EComm" />
                </li>
            </div>

            <div className='nav-ul-items'>
                <li><Link to = "/search">Search</Link></li>
                <li><Link to = "/products">Products</Link></li>
                <li><Link to = "/add">Add </Link></li>
                <li><Link onClick={logout} to="/login">Logout</Link></li>
                <li><Link to = "/profile">Profile</Link></li>
            </div>
            
        </ul>
        :
        <ul className = 'nav-ul'>

            <div className='nav-logo'>
                <li>
                    <img id="logo" src="../logo.png" alt="EComm" />
                </li>
            </div>

            <div className='nav-ul-items'>
                <li><Link to = "/login">Login</Link></li>
                <li><Link to = "/signup">SignUp</Link></li>
            </div>

        </ul>
        }

    </>
  )
}

export default Nav;