import React, { useState } from 'react';
import './Share.css';

const Share = () => {
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle post submission
  };

  return (
    <div className="share">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button type="submit">Share</button>
      </form>
    </div>
  );
};

export default Share;
