import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { following } from "../../redux/features/userSlice";
import axios from "axios";

const User = ({ person }) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [follow, setFollow] = useState(
    person.followers.includes(currentUser.user._id)
  );
  //console.log(follow);

  const handleFollow = async () => {
    if (follow) {
      dispatch(following(person._id));
      const res = await axios.put(
        `http://localhost:8000/user/${person._id}/unfollow`,
        currentUser.user,
        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );
      //console.log(res);
      setFollow((prev) => !prev);
      console.log(follow);
    } else {
      dispatch(following(person._id));
      const res = await axios.put(
        `http://localhost:8000/user/${person._id}/follow`,
        currentUser.user,
        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );
      setFollow((prev) => !prev);
      console.log(follow);
    }
  };
  return (
    <div className="follower">
      <div>
        <img src="" alt="profile" className="followerImage" />
        <div className="name">
          <span>{person.firstname}</span>
          <span>@{person.lastname}</span>
        </div>
      </div>
      <button
        className={
          follow ? "button fc-button UnfollowButton" : "button fc-button"
        }
        onClick={handleFollow}
      >
        {follow ? "unFollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
