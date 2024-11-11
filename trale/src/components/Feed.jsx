// src/components/Feed.jsx
import React from 'react';
import './Feed.css';

const Feed = () => {
  return (
    <div className="feed">
      <h3>Feed</h3>
      <div style={{ height: '1500px' }}>
        {/* Example scrollable content */}
        <p style={{ color: '#fff' }}>Scrollable content goes here...</p>
        <p style={{ color: '#fff' }}>This is an example of feed content.</p>
        <p style={{ color: '#fff' }}>Keep scrolling for more...</p>
        <p style={{ color: '#fff' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p style={{ color: '#fff' }}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
};

export default Feed;
