import React, { useState } from "react";
import "./RightSide.css";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <i class="fa-solid fa-house"></i>
        <i class="fa-solid fa-gear"></i>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-comment"></i>
      </div>
      <TrendCard />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
