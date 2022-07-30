import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {

  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  
  const usernameChange=(event)=>{
    setUsername(event.target.value);
  }

  const passwordChange=(event)=>{
    setPassword(event.target.value);
  }

  const emailChange=(event)=>{
    setEmail(event.target.value);
  }

  const collectData = async()=>{
    let result = await fetch('http://localhost:5000/signup', {
      method: 'post',
      body:JSON.stringify({username, email, password}),
      headers:{
        'Content-Type':'application/json'
      }
    });

    result = await result.json();

    if(result){
      navigate('/add');
    }
    localStorage.setItem('user', JSON.stringify(result));

    window.location.reload(false);
  }

  return (
    <div className="signup-container">
      <h1>SignUp</h1>
      
      <div className="username-box">
        <label htmlFor="username">UserName</label>
        <input onChange={usernameChange} type="text"/>
      </div>

      <div className="email-box">
        <label htmlFor="email">Email</label>
        <input onChange={emailChange} type="email"/>
      </div>

      <div className="password-box">
        <label htmlFor="password">Password</label>
        <input onChange={passwordChange} type="password"/>
      </div>
      
      <div className="image-box">
        <label htmlFor="avatar">Upload Profile Photo</label>
        {/* <input onChange={passwordChange} type="password"/> */}
        <input type="file" accept='image/png, image/jpg, image/jpeg, image/svg' name="avatar" id="avatar" />
      </div>


      <div className="submit">
        <button onClick={collectData} className="signup-btn">
          SignUp
        </button>
      </div>

    </div>
  )
}

export default SignUp