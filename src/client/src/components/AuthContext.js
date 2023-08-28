import React, { createContext, useContext, useState ,useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(''); // Add userEmail state
  const [token, setToken] = useState('');

  useEffect(() => {
    // Check if user data exists in local storage
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.loggedIn) {
      setLoggedIn(true);
      setUserEmail(userData.userEmail);
    }
  }, []);
  const login = (email, token) => {
    setLoggedIn(true);
    setUserEmail(email); // Set the user's email
    setToken(token);
    localStorage.setItem('userData', JSON.stringify({ loggedIn: true, userEmail: email }));
  };

  const logout = () => {
    setLoggedIn(false);
    setUserEmail(''); // Clear the user's email on logout
    setToken('');
    localStorage.removeItem('userData');
  };
  const value = {
    loggedIn,
    userEmail,
    token,
    login,
    logout
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};


