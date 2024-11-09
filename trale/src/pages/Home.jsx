// src/pages/Home.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="home">
      <Navbar />
      <div className="main-text">
        <h1>Welcome to the Travel Social Media Platform</h1>
        <p>Connect with travelers around the world.</p>
        {user && <p>Hello, {user.username}!</p>}
      </div>
    </div>
  );
};

export default Home;
