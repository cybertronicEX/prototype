import React, { useState } from 'react';
import '../css/register.css'; // Create a CSS file for styling
import Axios from 'axios';
function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
        const response = await Axios.post('http://localhost:3001/userBE/addusers', {
          username,
          email,
          password,
        });
        console.log(response.data.message);
      } catch (error) {
        console.error('Registration error:', error.response.data.error);
      }
    // Here you can implement your registration logic, such as sending the data to the server
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
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
        <button className='buttonR' type="submit">Register</button>
        <a href='/'>already have an account?</a>
      </form>
    </div>
  );
}

export default Register;
