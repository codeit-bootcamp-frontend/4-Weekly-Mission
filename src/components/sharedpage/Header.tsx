import React, { useState, useEffect } from 'react';
import '../../css/Header.css';
import logo from '../../image/logo.svg';
import { getUser, getFolder } from '../../api';
import { HeaderItem } from '../../consts/type';

function Header() {
  const [userInfo, setInfo] = useState<HeaderItem>({
    name: '',
    email: '',
    profileImageSource: '',
  });
  const [folderInfo, setFolder] = useState({ name: '', profile: '' });
  const [isUserInfo, setIsUserInfo] = useState(true);

  useEffect(() => {
    async function getData() {
      const userData = await getUser();
      if (userData && !userData.error) {
        setIsUserInfo(true);
        setInfo(userData);
      } else {
        setIsUserInfo(false);
      }
    }
    async function getFolderData() {
      const folderData = await getFolder();
      const folderName = folderData.folder.name;
      const folderImg = folderData.folder.owner.profileImageSource;
      setFolder({ name: folderName, profile: folderImg });
    }
    getData();
    getFolderData();
  }, []);
  const username = userInfo.name;
  const useremail = userInfo.email;
  const profileImg = userInfo.profileImageSource;

  return (
    <div className="headerContainer">
      <div className="headersub">
        <div className="subcontainer">
          <a href="./">
            <img src={logo} alt="homelogo"></img>
          </a>
          <div className="userInfo">
            {isUserInfo ? (
              <>
                <div className="headerimgContainer">
                  <img src={profileImg} id="bottomimg" alt="profile"></img>
                </div>
                <span>{useremail}</span>
              </>
            ) : (
              <button id="login">로그인</button>
            )}
          </div>
        </div>
      </div>
      <div className="headermain">
        <div className="maininfo">
          <div className="frameinfo">
            <img src={folderInfo.profile} id="folderImg" alt="folderprofile"></img>

            <span>{username}</span>
          </div>
          <div className="bookmarkinfo">
            <span>{folderInfo.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
