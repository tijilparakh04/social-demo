import React from 'react';
import './Post.css';

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postTop">
        <span className="postUser">{post.user}</span>
      </div>
      <div className="postContent">
        <p>{post.desc}</p>
        {post.img && <img src={post.img} alt="Post" />}
      </div>
      <div className="postBottom">
        <span>{post.likes} likes</span>
      </div>
    </div>
  );
};

export default Post;
