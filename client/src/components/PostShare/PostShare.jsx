import React, { useState, useRef } from "react";
import "./PostShare.css";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="PostShare">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpg33BcIxjKDqG3k98UYSAjdX0cxFfcCslkvkmme5hC8xwJ9Xf8pA7iuJnUtJpHF8rui4&usqp=CAU"
        alt=""
      />
      <div>
        <input type="text" placeholder="What's happening....." />

        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)", fontSize: "1rem" }}
            onClick={() => imageRef.current.click()}
          >
            <i className="fa-regular fa-image"></i> Photo
          </div>
          <div
            className="option"
            style={{ color: "var(--video)", fontSize: "1rem" }}
          >
            <i className="fa-solid fa-video"></i> Video
          </div>
          <div
            className="option"
            style={{ color: "var(--location)", fontSize: "1rem" }}
          >
            <i className="fa-solid fa-location-dot"></i> Location
          </div>
          <div
            className="option"
            style={{ color: "var(--schedule)", fontSize: "1rem" }}
          >
            <i className="fa-solid fa-calendar-days"></i> Schedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <i
              onClick={() => setImage(null)}
              className="fa-regular fa-circle-xmark"
            ></i>
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
