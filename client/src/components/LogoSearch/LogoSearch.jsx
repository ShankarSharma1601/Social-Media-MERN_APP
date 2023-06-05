import React from "react";
import "./LogoSearch.css";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      {/* <img src="" alt="Logo" /> */}
      <i
        className="fas fa-solid fa-dice-d20"
        style={{ fontSize: "48px", color: "blueviolet" }}
      ></i>
      <div className="Search">
        <input type="text" placeholder="Search...." />
        <div className="s-icon">
          <i
            className="fas fa-solid fa-magnifying-glass"
            style={{ fontSize: "25px" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
