import React, { useEffect, useState } from "react";
import "./FollowersCard.css";
// import { Followers } from "../../Data/FollowersData";
import { useSelector } from "react-redux";
import FollowersModal from "../FollowersModal/FollowersModal";
import User from "../User/User";
import axios from "axios";

const FollowersCard = ({ location }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [persons, setPersons] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await axios.get("http://localhost:8000/user");
      setPersons(data);
    };
    fetchPersons();
  }, []);
  return (
    <div className="FollowerCard">
      <h3>People you may know</h3>
      {persons.map((person, id) => {
        if (person._id != currentUser.user._id)
          return <User person={person} key={id} />;
      })}
      {!location ? (
        <span
          onClick={() => setModalOpened(true)}
          style={{ cursor: "pointer" }}
        >
          Show more
        </span>
      ) : (
        ""
      )}

      <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
    </div>
  );
};

export default FollowersCard;
