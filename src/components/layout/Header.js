import React, { useEffect, useState } from 'react';
import logo from '../../assets/header/logo.svg';
import '../../style/Header.css';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../apis/api';

const Header = () => {
  const [user, setUser] = useState({ email: null, image_source: null });

  const handleLoadUser = async () => {
    const data = await getUserInfo();
    const { email, image_source } = data.data[0];

    if (!email) return;
    setUser({ email, image_source });
  };

  useEffect(() => {
    handleLoadUser();
  }, []);

  return (
    <div className='HeaderContainer'>
      <div className='HeaderContent'>
        <Link to='/'>
          <img className='Logo' src={logo} alt='logo img' />
        </Link>
        {user.email !== null ? (
          <div className='ProfileContent'>
            <img
              className='ProfileImg'
              src={user.image_source}
              alt='profile img'
            />
            <span>{user.email}</span>
          </div>
        ) : (
          <Link to='/signin' className='LoginBtn'>
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
