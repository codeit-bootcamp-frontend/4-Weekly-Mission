import { useEffect, useState } from 'react';
import { getApi } from '../../utils/apis';
import Profile from '../../components/Profile';
import Logo from '../common/Logo';
import Button from '../common/Button';
import './Nav.css';

const Nav = () => {
  const [userInfo, setUserInfo] = useState({});
  // TODO: userId 임시값으로 데이터 받은 후 수정 예정
  const userId = '1';

  const handleLoad = async () => {
    const { data } = await getApi(`/users/${userId}`);
    setUserInfo(data[0]);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="header_area relative">
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
