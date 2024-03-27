import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { get } from '../../apis/api';
import Button from '../button/Button';
import * as S from './Header.style';
import MainLogo from '../../assets/icons/logo.svg';

interface User {
  email: string;
  profileImageSource?: string;
  image_source?: string;
}

const Header: React.FC = () => {
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const [profileImage, setProfileImage] = useState<string | undefined>();

  useEffect(() => {
    location.pathname === '/shared'
      ? get('/sample/user').then((data: User) => setUser(data))
      : get('/users/1').then(({ data }: { data: User[] }) => setUser(data[0]));
  }, [location]);

  useEffect(() => {
    if (user) {
      const imageSource = user.profileImageSource ?? user.image_source;
      setProfileImage(imageSource);
    }
  }, [user]);

  return (
    <S.Container $position={location.pathname === '/shared' ? 'sticky' : 'static'}>
      <nav className="gnb">
        <Link to="/">
          <img src={MainLogo} alt="홈으로 연결된 Linkbrary 로고" />
        </Link>
        {user?.email ? (
          <div className="user-box">
            <img className="user-img" src={profileImage} alt="프로필 이미지" />
            <span className="user-email">{user.email}</span>
          </div>
        ) : (
          <Link to="/signin">
            <Button width={'12.8rem'}>
              <span>로그인</span>
            </Button>
          </Link>
        )}
      </nav>
    </S.Container>
  );
};

export default Header;
