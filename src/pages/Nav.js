import { useEffect, useState } from 'react';
import { getLoginUserInfo } from '../utils/apis';
import Profile from '../components/Profile';
import Logo from '../components/Logo';
import Button from '../components/Button';
import './Nav.css';

const Nav = () => {
  const [userInfo, setUserInfo] = useState({});

  const handleLoad = async () => {
    const { data } = await getLoginUserInfo('1'); // userId=1
    setUserInfo(data[0]);
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
        <Button text="로그인"></Button>
      )}
    </div>
  );
};

export default Nav;
