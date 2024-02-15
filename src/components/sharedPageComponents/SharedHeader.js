import React from 'react';

export default function SharedHeader({ folder }) {
  return (
    <>
      <div className="folder">
        <img
          src={folder.userImage}
          alt="UserImage"
          className="folder-user-image"
          width="60"
          height="60"
        ></img>
        <p className="folder-user-name">{folder.userName}</p>
        <p className="folder-folder-name">{folder.name}</p>
      </div>
    </>
  );
}
