import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const goToLogin = () => navigate('/login');
  const goToRegister = () => navigate('/register');

  return (
    <div>
      <h1>Welcome to the Travel Social Media Platform</h1>
      {user ? (
        <p>Hello, {user.username}!</p>
      ) : (
        <p>Please log in or register.</p>
      )}
      <button onClick={goToLogin}>Login</button>
      <button onClick={goToRegister}>Sign Up</button>
    </div>
  );
};

export default Home;
