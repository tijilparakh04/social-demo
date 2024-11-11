// src/components/Leftbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Leftbar.css';

const Leftbar = () => {
  return (
    <div className="leftbar">
      <button>
        <Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>
          Profile Information
        </Link>
      </button>
      <button>
        <Link to="/logout" style={{ textDecoration: 'none', color: 'white' }}>
          Logout
        </Link>
      </button>
    </div>
  );
};

export default Leftbar;
