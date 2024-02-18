import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './images/logo.png';

import './Header.css';

export default function Header() {
  return (
    <header id="headerShared">
      <div className="headerLogo">
        <a href="/">
          <img className="logo" src={logo} alt="Linkbrary로고" />
        </a>
      </div>
      <Profile />
    </header>
  );
}

function Profile({ owner }) {
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://bootcamp-api.codeit.kr/api/sample/user');
        setProfileData(response.data.user.owner);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {profileData === null ? (
        <div className="headerButton">
          <button>로그인</button>
        </div>
      ) : (
        <div id="profileArea">
          <img id="profileImage" src={owner.profileImageSource} alt="프로필 이미지" />
          <p id="profileEmail">{owner.email}</p>
        </div>
      )}
    </>
  );
}
