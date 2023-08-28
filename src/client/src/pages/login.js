import React, { useState } from 'react';
import '../css/Login.css'; // Create a CSS file for styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext'; // Import the AuthContext
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Use the login function from AuthContext

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const Navigate =useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:3001/userBE/login', {
          email,
          password,
          
        });
        login(email, response.data.token);
        alert("login successful")
        console.log(response.data.message);
        Navigate("/home")
      } catch (error) {
        console.error('Login error:', error.response.data.error);
        alert("invalid credentials")
      }
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className='buttonL' type="submit">Login</button>
        <a href='/register'>Dont have an acc</a>
      </form>
    </div>
  );
}

export default Login;
