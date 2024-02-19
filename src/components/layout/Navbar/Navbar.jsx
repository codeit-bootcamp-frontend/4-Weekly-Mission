import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import mainLogo from '../../../assets/icons/logo.svg';
import { getSampleUser, getUserById } from '../../../apis/auth';
import useErrorMessageModal from '../../../hooks/useErrorMessageModal';
import ErrorMessageModal from '../../common/Modal/ErrorMessageModal';
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
  const { isModalOpen, errorMessage, showErrorModal, hideErrorModal } =
    useErrorMessageModal();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const isFolderPage = location.pathname.startsWith('/folder');
        const userData = isFolderPage
          ? await getUserById()
          : await getSampleUser();

        setUser({
          email: userData.email || userData.data[0].email,
          profileImageSource:
            userData.profileImageSource || userData.data[0].image_source,
        });
      } catch (error) {
        showErrorModal(error.message);
      }
    };

    fetchUserData();
  }, [location.pathname, showErrorModal]);

  const handleLoginButtonClick = () => {
    // 로그인 로직 구현
  };

  return (
    <>
      {isModalOpen && (
        <ErrorMessageModal message={errorMessage} onClose={hideErrorModal} />
      )}
      <NavbarContainer>
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
    </>
  );
};

export default Navbar;
