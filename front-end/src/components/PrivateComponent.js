import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';


function PrivateComponent() {
    const authentication = localStorage.getItem('user');
  return (
    authentication?<Outlet/>:<Navigate to='/login'/>
  )
}

export default PrivateComponent;