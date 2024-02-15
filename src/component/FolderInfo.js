import React, { useState, useEffect } from "react";
import "../style/header.css";

function FolderInfo() {
  const [folderInfo, setFolderInfo] = useState({
    ownerName: "",
    folderName: "",
    profileImage: "",
  });

  useEffect(() => {
    const getFolderInfo = async () => {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        if (!response.ok) {
          throw new Error("error");
        }
        const answer = await response.json();
        setFolderInfo({
          ownerName: answer.folder.owner.name,
          folderName: answer.folder.name,
          profileImage: answer.folder.owner.profileImageSource,
        });
      } catch (err) {
        console.error(err);
      }
    };
    getFolderInfo();
  }, []);

  return (
    <div className="folderInfo">
      <div className="ownerInfo">
        <img
          className="folderImage"
          src={folderInfo.profileImage}
          alt={folderInfo.ownerName}
        />
        <p className="ownerName">@{folderInfo.ownerName}</p>
      </div>

      <p className="folderName">{folderInfo.folderName}</p>
    </div>
  );
}

export default FolderInfo;
