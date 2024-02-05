import React, { useEffect, useState } from 'react';
import logo from '../../assets/Images/logo.svg';

export default function Header() {
  const [userProfileImage, setUserProfileImage] = useState(null);
  const [userProfileEmail, setUserProfileEmail] = useState(null);
  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    const response = await fetch(
      'https://bootcamp-api.codeit.kr/api/sample/user',
    );
    const result = await response.json();
    console.log(result);
    setUserProfileImage(result.profileImageSource);
    setUserProfileEmail(result.email);
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
            <p>{userProfileEmail}</p>
          </div>
        </div>
      </nav>
    </>
  );
}
