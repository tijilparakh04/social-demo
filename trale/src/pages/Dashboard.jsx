// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Welcome, {user.username}</h2>
        <nav>
          <ul>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="feed">
        <h2>Feed</h2>
        {/* You can dynamically render feed content here */}
        <p>This is the feed area where posts will be displayed.</p>
      </div>
    </div>
  );
};

export default Dashboard;
