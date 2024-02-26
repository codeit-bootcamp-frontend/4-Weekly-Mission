import React from 'react';
import '../../../styles/profile.css';
import useCardsData from '../../../hooks/useCardsData';

import { PROFILE } from '../../../constants/fetchConstants';
import { SAMPLE_FOLDER_URL } from '../../../constants/urls';
function Profile() {
  const { ownerImg, ownerName, folderName } = useCardsData(
    PROFILE,
    SAMPLE_FOLDER_URL
  );
  return (
    <div className="profile">
      <div className="profile__folderOwner">
        <img className="folderOwner--img" src={ownerImg} alt={ownerName}></img>
        <span className="folderOwner--name">@{ownerName}</span>
      </div>
      <div className="profile__folderName">{folderName}</div>
    </div>
  );
}
export default Profile;
