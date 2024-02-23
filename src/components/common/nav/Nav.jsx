import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../ui/button/Button';
import { get } from '../../../apis/api';
import * as S from './Nav.style';
import mainLogo from '../../../assets/common/logo.svg';

const Nav = ({ position }) => {
  const location = useLocation();
  const [user, setUser] = useState([]);
  const [profileImage, setProfileImage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (location.pathname === '/shared') {
          const sampleUser = await get('/sample/user');
          return setUser(sampleUser);
        } else {
          const currentUser = await get('/users/1');
          return setUser(currentUser.data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [location]);

  useEffect(() => {
    if (user) {
      const imageSource = user.profileImageSource ?? user.image_source;
      setProfileImage(imageSource);
    }
  }, [user]);

  return (
    <S.Container $position={position}>
      <div className="gnb">
        <Link to="/">
          <img src={mainLogo} alt="홈으로 연결된 Linkbrary 로고" />
        </Link>
        {user.email ? (
          <div className="user-box">
            <img className="user-img" src={profileImage} alt="프로필 이미지" />
            <span className="user-email">{user?.email}</span>
          </div>
        ) : (
          <Button width={'12.8rem'}>
            <Link to="/signin">
              <span>로그인</span>
            </Link>
          </Button>
        )}
      </div>
    </S.Container>
  );
};

export default Nav;
