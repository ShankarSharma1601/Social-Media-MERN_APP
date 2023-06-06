import React from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          // src="https://cultivatedculture.com/wp-content/uploads/2019/05/Chromatic-LinkedIn-Cover-Photo-Background-1024x311.png"
          src="https://149369349.v2.pressablecdn.com/wp-content/uploads/2012/10/twitter-cover.jpg"
          alt="Cover"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpg33BcIxjKDqG3k98UYSAjdX0cxFfcCslkvkmme5hC8xwJ9Xf8pA7iuJnUtJpHF8rui4&usqp=CAU"
          alt="Profile"
        />
      </div>
      <div className="ProfileName">
        <span>Name</span>
        <span>Designation</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,980</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
