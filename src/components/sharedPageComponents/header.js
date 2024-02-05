import React, { useEffect, useState } from 'react';
import logo from '../../assets/Images/logo.svg';

export default function Header() {
  const [userProfileImage, setUserProfileImage] = useState(null);
  const [userProfileEmail, setUserProfileEmail] = useState(null);
  const [folderUserImage, setFolderUserImage] = useState(null);
  const [folderUserName, setFolderUserName] = useState(null);
  const [folderName, setFolderName] = useState(null);
  useEffect(() => {
    userData();
    folderData();
  }, []);

  const userData = async () => {
    const response = await fetch(
      'https://bootcamp-api.codeit.kr/api/sample/user',
    );
    const result = await response.json();
    setUserProfileImage(result.profileImageSource);
    setUserProfileEmail(result.email);
  };

  const folderData = async () => {
    const response = await fetch(
      'https://bootcamp-api.codeit.kr/api/sample/folder',
    );
    const { folder } = await response.json();
    setFolderUserImage(folder.owner.profileImageSource);
    setFolderUserName(folder.owner.name);
    setFolderName(folder.name);
  };

  return (
    <>
      <nav>
        <div className="menu">
          <a href="">
            <img src={logo} className="main-logo" />
          </a>
          <div className="user-profile">
            <img
              src={userProfileImage}
              alt="userImage"
              className="profile-image"
            ></img>
            <p className="profile-email">{userProfileEmail}</p>
          </div>
        </div>
      </nav>
      <div className="folder">
        <img
          src={folderUserImage}
          alt="UserImage"
          className="folder-user-image"
        ></img>
        <p className="folder-user-name">{folderUserName}</p>
        <p className="folder-folder-name">{folderName}</p>
      </div>
    </>
  );
}
