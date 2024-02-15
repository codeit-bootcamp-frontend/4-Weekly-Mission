import React from 'react';
import '../../../styles/profile.css';
import useFolderData from '../../../hooks/useFolderData';

function Profile() {
  const owner = useFolderData('profile');
  return (
    <div className="profile">
      <div className="profile__folderOwner">
        <img
          className="folderOwner--img"
          src={owner.ownerImg}
          alt={owner.ownerName}
        ></img>
        <span className="folderOwner--name">@{owner.ownerName}</span>
      </div>
      <div className="profile__folderName">{owner.folderName}</div>
    </div>
  );
}
export default Profile;
