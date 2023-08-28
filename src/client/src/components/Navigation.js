import React from 'react';
import { useAuth } from './AuthContext';
import Navbar from './Navbar';

function Navigation() {
  const { loggedIn } = useAuth();

  return loggedIn ? <Navbar /> : null;
}

export default Navigation;
