import React from 'react';
import '../styles/header.css';

const FolderTitle = ({ folder }) => {
  return (
    <header>
      <div className="folder">
        <img src={folder.profileImageSource} alt="userImage" className="folder-user-image" />
        <p className="folder-user-name">@{folder.ownerName}</p>
        <p className="folder-name">{folder.folderName}</p>
      </div>
    </header>
  );
};

export default FolderTitle;
