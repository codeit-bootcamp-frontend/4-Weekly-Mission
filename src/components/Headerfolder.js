import { useState, useEffect } from 'react';
import '../css/Header.css';
import logo from '../image/logo.svg';
import { getUser } from '../api';
function Header() {
  const [userInfo, setInfo] = useState({ name: '', email: '', profileImageSource: '' });
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
    getData();
  }, []);
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
    </div>
  );
}

export default Header;
