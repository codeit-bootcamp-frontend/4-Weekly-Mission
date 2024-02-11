import React, { useState, useEffect } from "react";
import "./FolderNameSection.css";

const FolderNameSection = () => {
  const [folderData, setFolderData] = useState(null);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFolderData(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (!folderData) {
    return <div>로딩 중입니다</div>;
  }

  return (
    <div className="FolderNameSection">
      <img
        className="Avatar"
        src={folderData.folder.owner.profileImageSource}
        alt="프로필"
      />
      <span className="User">@{folderData.folder.owner.name}</span>
      <h2 className="FolderName">{folderData.folder.name}</h2>
    </div>
  );
};

export default FolderNameSection;
