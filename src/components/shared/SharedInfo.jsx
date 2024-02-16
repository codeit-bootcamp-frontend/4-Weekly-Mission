import React from "react";
import "./SharedInfo.css";

const SharedInfo = () => {
  return (
    <div className="SharedInfo">
      <img className="SharedInfo-owner-img" />
      <p className="SharedInfo-owner-name"></p>
      <h1 className="SharedInfo-folder-name"></h1>
    </div>
  );
};

export default SharedInfo;
