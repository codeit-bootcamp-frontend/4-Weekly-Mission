import { useState, useEffect } from 'react';
import './Gnb.css';
import { getUserInfo } from '../../services/api';
import LoginButton from '../Common/LoginButton';
import logo from '../../assets/images/logo.svg';

//글로벌 네비게이션 바
function Gnb() {
  // 유저 정보 가져오기
  const [userInfo, setUserInfo] = useState(null);

  const handleLoadUser = async () => {
    try {
      const result = await getUserInfo();
      setUserInfo(result);
    } catch (error) {
      console.error(error);
      setUserInfo(null);
    }
  };

  useEffect(() => {
    handleLoadUser();
  }, []);

  const userProfileImg = userInfo?.profileImageSource || '';
  const userEmail = userInfo?.email || '';

  return (
    <nav className="gnb position-fixed margin-auto z-top">
      <div className="gnb-container flex-row">
        <img className="gnb-logo" src={logo} alt="logo"></img>
        {userInfo ? (
          <div className="gnb-profile flex-row">
            <img className="profile-img" src={userProfileImg} alt="profile-img"></img>
            <p className="profile-email text-color-gray100 hidden">{userEmail}</p>
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </nav>
  );
}

export default Gnb;
