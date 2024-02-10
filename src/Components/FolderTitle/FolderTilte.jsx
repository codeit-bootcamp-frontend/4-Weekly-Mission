import React from "react";
import "./css/FolderTitle.css";

function FolderTilte({ folderName, owner }) {
  const { name, profileImageSource } = owner;
  return (
    <section className="FolderTitle_container">
      <div className="FolderTitle_content">
        <div>
          <img
            src={profileImageSource}
            alt={profileImageSource}
            className="FolderTitle_img"
          />
          <p className="FolderTitle_userName">@{name}</p>
        </div>
        <h2 className="FolderTitle_folderName">{folderName}</h2>
      </div>
    </section>
  );
}

export default FolderTilte;
