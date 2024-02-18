import React from "react";
import "../Styles/FolderHeader.css";

export function SharedHeader({ folder }) {
  return (
    <>
      <header>
        <div className="folder">
          <div className="folderProfile">
            <img
              src={folder.userProfileImage}
              className="folderImg"
              alt="userProfileImg"
            ></img>
            <p className="folderProfileName">{folder.userName}</p>
          </div>
          <div>
            <h2 className="folderName">{folder.folderName}</h2>
          </div>
        </div>
      </header>
    </>
  );
}
