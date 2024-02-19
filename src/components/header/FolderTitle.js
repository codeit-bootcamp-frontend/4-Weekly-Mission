import React from 'react';
import '../styles/header.css';

const FolderTitle = ({ folder }) => {
  return (
    <section>
      <div className="folder">
        <img src={folder.profileImageSource} alt="userImage" className="folder-user-image" />
        <p className="folder-user-name">@{folder.ownerName}</p>
        <p className="folder-name">{folder.folderName}</p>
      </div>
    </section>
  );
};

export default FolderTitle;
