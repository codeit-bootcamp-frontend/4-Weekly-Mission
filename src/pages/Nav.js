import { useEffect, useState } from 'react';
import { getLoginUserInfo } from '../utils/apis';
import Profile from '../components/Profile';
import Logo from '../components/Logo';
import LoginButton from '../components/LoginButton';
import './Nav.css';

const Nav = () => {
  const [userInfo, setUserInfo] = useState({});

  const handleLoad = async () => {
    const getUser = await getLoginUserInfo();
    setUserInfo(getUser);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="header_area">
      <Logo></Logo>
      {userInfo ? (
        <Profile email={userInfo.email}></Profile>
      ) : (
        <LoginButton></LoginButton>
      )}
    </div>
  );
};

export default Nav;
