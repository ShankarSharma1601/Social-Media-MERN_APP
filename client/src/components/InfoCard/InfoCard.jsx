import React, { useState } from "react";
import "./InfoCard.css";
import ProfileModal from "../ProfileModal/ProfileModal";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <i
            className="fa-solid fa-pen"
            onClick={() => setModalOpened(true)}
          ></i>
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status: </b>
        </span>
        <span> in Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in: </b>
        </span>
        <span> India</span>
      </div>
      <div className="info">
        <span>
          <b>Works in: </b>
        </span>
        <span> company</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
