import React from "react";
import "./ProfileCard.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileCard = ({ location }) => {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser.user);
  //const ProfilePage = true;
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
        <span>
          {currentUser.user.firstname} {currentUser.user.lastname}
        </span>
        <span>
          {currentUser.user.worksAt
            ? currentUser.user.worksAt
            : "Write about yourself"}
        </span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            {/* {console.log(currentUser.followers)} */}
            <span>{currentUser.user.followers.length}</span>
            {/* <span>1</span> */}
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{currentUser.user.following.length}</span>
            {/* <span>3</span> */}
            <span>Following</span>
          </div>

          {location === "profilePage" && (
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

      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link
            to={`/profile/${currentUser.user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
