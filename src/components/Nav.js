import React, { useState, useEffect } from "react";
import "../style/nav.css";
import { responseFolderData } from "../apis/dataFetch";

const Nav = () => {
  const [folderInfo, setFolderInfo] = useState({
    ownerName: "",
    folderName: "",
    profileImage: "",
  });

  useEffect(() => {
    const fetchFolderInfo = async () => {
      try {
        const data = await responseFolderData();
        setFolderInfo({
          ownerName: data.folder.owner.name,
          folderName: data.folder.name,
          profileImage: data.folder.owner.profileImageSource,
        });
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };
    fetchFolderInfo();
  }, []);

  return (
    <nav className="nav">
      <div className="nav-item">
        <div className="mark">
          <img src={folderInfo.profileImage} alt={folderInfo.ownerName} />
        </div>
        <p className="owner-name">@{folderInfo.ownerName}</p>
        <p className="folder-name">{folderInfo.folderName}</p>
      </div>
    </nav>
  );
};

export default Nav;
