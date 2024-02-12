import logoImg from '../assets/logo.png';
import { useEffect, useState } from 'react';
import { getUser } from '../services/api';

function Header() {
  const [userInfo, setUserInfo] = useState({});

  const apiGetUser = async () => {
    try {
      const { name, email, profileImageSource } = await getUser();
      setUserInfo({ name, email, profileImageSource });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiGetUser();
  }, []);
  return (
    <nav id="header">
      <div className="header-box">
        <div className="header-logo-box">
          <a href="/">
            <img src={logoImg} alt="logo" />
          </a>
        </div>
        <div className="login-box">
          {userInfo.length === 0 ? (
            <a href="/signin">
              <div className="login-btn">로그인</div>
            </a>
          ) : (
            <div className="user-info-box">
              <img className="user-img" src={userInfo.profileImageSource} alt="user-img" />
              <div className="user-email">{userInfo.email}</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
