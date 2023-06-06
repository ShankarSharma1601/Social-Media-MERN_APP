import React from "react";
import "./RightSide.css";
import TrendCard from "../TrendCard/TrendCard";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="navIcons">
        <i class="fa-solid fa-house"></i>
        <i class="fa-solid fa-gear"></i>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-comment"></i>
      </div>
      <TrendCard />

      <button className="button r-button">Share</button>
    </div>
  );
};

export default RightSide;
