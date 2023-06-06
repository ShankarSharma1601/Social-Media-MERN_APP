import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="Post">
      <img src={post.img} alt="" />
      <div className="postReact">
        {post.liked && (
          <i
            className="fa-solid fa-heart"
            style={{ fontSize: "1.5rem", color: "red" }}
          ></i>
        )}
        {!post.liked && (
          <i className="fa-regular fa-heart" style={{ fontSize: "1.5rem" }}></i>
        )}
        <i
          className="fa-regular fa-comment-dots"
          style={{ fontSize: "1.5rem" }}
        ></i>
        <i
          className="fa-regular fa-share-from-square"
          style={{ fontSize: "1.5rem" }}
        ></i>
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {post.likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{post.name}</b>
        </span>
        <span> {post.desc}</span>
      </div>
    </div>
  );
};

export default Post;
