import React from 'react';
import '../../../styles/profile.css';
import useFolderData from '../../../hooks/useFolderData';
import SAMPLE_FOLDER_URL from '../../../constants/urls';
function Profile() {
  const owner = useFolderData('profile', SAMPLE_FOLDER_URL);
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
