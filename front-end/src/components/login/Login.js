import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [enterpassword, setEnterPassword] = useState('');
    const [enterusername, setEnterUsername] = useState('');
    const [checkCredentials, setCheckCredentials] = useState('');

    const usernameChange = (event)=>{
        setUsername(event.target.value);
    }

    const passwordChange = (event)=>{
      console.log(event.target.value);
      setPassword(event.target.value);
    }
    
    const navigate = useNavigate();
    
    const handleLogin = async ()=>{
      
        // console.log(username);
        // console.log(password);

        let result = await fetch('http://localhost:5000/login', {
            method:'post', 
            body: JSON.stringify({username, password}),
            headers:{
                'Content-Type':'application/json'
            }
        });

        result = await result.json();

        if(result.username!==null && result.password !== null){
          console.log(result.username, result.password);
          setCheckCredentials(""); 
          navigate('/profile'); //Navigates to Home page

          localStorage.setItem('user', JSON.stringify(result.username)); //stores in localStorage

          window.location.reload(false); // Reloads the page and updates Navbar
        }else{
          navigate('/login');
          setCheckCredentials("Wrong Credentials");
        }

        if(username===''){
          setEnterUsername("ENTER USERNAME");
        }else{
          setEnterUsername("");
        }
        
        if(password === ''){
          setEnterPassword("ENTER PASSWORD");
        }else{
          setEnterPassword("");
        }
        
      }
      
      return (
        <div className="login-container">
      <h1>Login</h1>
      <h1>{checkCredentials}</h1>
      
      <div className="username-box">
        <label htmlFor="username">UserName <br /> {enterusername}</label>
        <input onChange={usernameChange} type="text"/>
      </div>

      <div className="password-box">
        <label htmlFor="password">Password <br /> {enterpassword}</label>
        <input onChange={passwordChange} type="password"/>
      </div>

      <div className="submit">
        <button onClick={handleLogin} className="login-btn">
          Login
        </button>
      </div>

    </div>
  )
}

export default Login;