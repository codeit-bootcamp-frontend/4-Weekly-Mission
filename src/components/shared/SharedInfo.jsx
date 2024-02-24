import React from "react";
import defaultProfileImg from "../../assets/image/default_profile.jpg";
import "./SharedInfo.css";
import "../../error.css";

const SharedInfo = ({ folderInfo, folderName, folderLoadingError }) => {
  const { profileImageSource = defaultProfileImg, name } = folderInfo;

  return (
    <div className="SharedInfo">
      <img className="SharedInfo-owner-img" src={profileImageSource} />
      <p className="SharedInfo-owner-name">{name}</p>
      <h1 className="SharedInfo-folder-name">{folderName}</h1>
      {folderLoadingError?.message && (
        <span className="error">{folderLoadingError.message}</span>
      )}
    </div>
  );
};

export default SharedInfo;
