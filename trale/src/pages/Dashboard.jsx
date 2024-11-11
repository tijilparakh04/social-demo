// src/pages/Dashboard.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Leftbar from '../components/Leftbar';
import Feed from '../components/Feed';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboardContainer">
        <Leftbar />
        <Feed />
      </div>
    </div>
  );
};

export default Dashboard;
