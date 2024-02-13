import React, { useState, useEffect } from "react";
import "../styles/Header.css";

function Header() {
  const [folderData, setFolderData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sample/folder"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch folder data");
      }
      const data = await response.json();
      setFolderData(data.folder);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Header">
      {folderData && (
        <>
          <img
            className="Header-profile"
            src={folderData.owner.profileImageSource}
            alt="폴더 소유자 프로필 이미지"
          />
          <span className="Header-owner">{folderData.owner.name}</span>
          <h2 className="Header-folder">{folderData.name}</h2>
        </>
      )}
    </div>
  );
}

export default Header;
