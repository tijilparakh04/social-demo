// src/components/Navbar.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Login from '../pages/Login';
import Register from '../pages/Register';
import './Navbar.css';

const Navbar = () => {
  const { user } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const closePopup = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">Travel Social</div>
        <div className="navbar-buttons">
          {user ? (
            <span>Hello, {user.username}</span>
          ) : (
            <>
              <button onClick={() => setShowLogin(true)}>Login</button>
              <button onClick={() => setShowRegister(true)}>Sign Up</button>
            </>
          )}
        </div>
      </nav>
      {showLogin && <Login closePopup={closePopup} />}
      {showRegister && <Register closePopup={closePopup} />}
    </>
  );
};

export default Navbar;
