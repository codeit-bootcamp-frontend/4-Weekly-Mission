import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import mainLogo from '../../../assets/icons/logo.svg';
import { getSampleUser, getUserById } from '../../../apis/auth';
import {
  NavbarContainer,
  NavbarList,
  NavbarItem,
  LogoLink,
  LoginButton,
  UserProfileImage,
  UserProfileContainer,
  UserProfileEmail,
} from './navbarStyle';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const isFolderPage = !location.pathname.startsWith('/folder');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let userData;
        if (location.pathname.startsWith('/folder')) {
          const data = await getUserById();
          userData = {
            email: data.data[0].email,
            profileImageSource: data.data[0].image_source,
          };
        } else {
          userData = await getSampleUser();
        }
        setUser(userData);
      } catch (error) {
        alert('유저 정보 데이터 로딩에 실패하였습니다.');
        setUser(null);
      }
    };

    fetchUserData();
  }, [location.pathname]);

  const handleLoginButtonClick = () => {
    // 로그인 로직 구현
  };

  return (
    <NavbarContainer $isFolderPage={isFolderPage}>
      <NavbarList>
        <NavbarItem>
          <LogoLink href="/">
            <img src={mainLogo} alt="Linkbrary Logo" />
          </LogoLink>
        </NavbarItem>
        <NavbarItem>
          {user ? (
            <UserProfileContainer>
              <UserProfileImage
                src={user.profileImageSource}
                alt="사용자 프로필"
              />
              <UserProfileEmail>{user.email}</UserProfileEmail>
            </UserProfileContainer>
          ) : (
            <LoginButton onClick={handleLoginButtonClick}>로그인</LoginButton>
          )}
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
