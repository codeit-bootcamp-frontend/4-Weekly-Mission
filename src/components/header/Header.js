import React from 'react';
import logo from '../../images/logo.svg';
import styled, { css } from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);

  ${(props) =>
    props.isSticky &&
    css`
      position: sticky;
      top: 0;
      z-index: 10;
    `}
`;

const Nav = styled.div`
  display: flex;
  height: 9.3rem;
  justify-content: space-between;
  align-items: center;
  max-width: 192rem;
  padding: 3.2rem 20rem;
  width: 100%;

  @media (max-width: 1199px) {
    max-width: 864px;
    padding: 3.2rem 3.25rem;
  }

  @media (max-width: 767px) {
    height: 6.3rem;
    padding: 1.8rem 3.2rem;
  }
`;

const Logo = styled.img`
  width: 13.3rem;
  height: 2.4rem;

  @media (max-width: 767px) {
    width: 8.8rem;
    height: 1.6rem;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  font-size: 1.4rem;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
`;

const ProfileEmail = styled.p`
  @media (max-width: 767px) {
    display: none;
  }
`;

const Login = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.3rem;
  cursor: pointer;
  background-image: linear-gradient(135deg, var(--primary) 0%, #6ae3fe 100%);
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.8rem;
  font-weight: 600;
  width: 12.8rem;
  padding: 1.6rem 2rem;

  @media (max-width: 767px) {
    width: 8rem;
    height: 3.7rem;
    font-size: 1.4rem;
    padding: 1rem 1.6rem;
  }
`;

const Header = ({ user, isSticky = true }) => {
  return (
    <HeaderContainer isSticky={isSticky}>
      <Nav>
        <a href="/">
          <Logo src={logo} alt="logo" />
        </a>
        {user ? (
          <ProfileContainer>
            <ProfileImage
              src={user.profileImageSource ? user.profileImageSource : user.image_source}
              alt="profileImage"
            />
            <ProfileEmail>{user.email}</ProfileEmail>
          </ProfileContainer>
        ) : (
          <Login href="/">로그인</Login>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
