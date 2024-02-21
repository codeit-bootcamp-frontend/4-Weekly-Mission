import React from "react";
import "./SharedInfo.css";

const SharedInfo = ({ folderInfo, folderName }) => {
  const { profileImageSource, name } = folderInfo;

  return (
    <div className="SharedInfo">
      <img className="SharedInfo-owner-img" src={profileImageSource} />
      <p className="SharedInfo-owner-name">{name}</p>
      <h1 className="SharedInfo-folder-name">{folderName}</h1>
    </div>
  );
};
export default SharedInfo;
