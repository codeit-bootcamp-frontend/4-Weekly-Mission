import React, { useState, useEffect } from "react";
import "./FolderSection.css";
import { fetchData } from "./fetchData";

const FolderSection = () => {
  const [folderData, setFolderData] = useState(null);

  useEffect(() => {
    fetchData().then((data) => setFolderData(data));
  }, []);

  if (!folderData) {
    return <div>로딩 중입니다</div>;
  }

  return (
    <div className="folder-section">
      <img
        className="avatar"
        src={folderData.folder.owner.profileImageSource}
        alt="프로필"
      />
      <span className="user">@{folderData.folder.owner.name}</span>
      <h2 className="folder-name">{folderData.folder.name}</h2>
    </div>
  );
};

export default FolderSection;
