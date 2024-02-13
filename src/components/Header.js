import logo from '../assets/linkbrary.svg';
import React, { useState, useEffect } from 'react';
import { fetchProfileData } from '../api';
import Profile from './Profile';
import './Header.css';

const Header = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const data = await fetchProfileData();
    setUserData(data);
  };
  return (
    <>
      <header className="Header">
        <nav>
          <div className="gnb">
            <h1 className="logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </h1>
            <div className="account">
              <Profile userData={userData} />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
