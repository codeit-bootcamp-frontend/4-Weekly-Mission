import React from "react";
import styled from "styled-components";
import { Profile } from "../Profile/Profile.tsx";

interface NavigationBarProps {
  profile: {
    profileImageSource: string;
    email: string;
  };
  isSticky: boolean;
}

const Nav = styled.nav<{ $isSticky: boolean }>`
  display: flex;
  justify-content: center;
  position: ${(props) => (props.$isSticky ? "sticky" : "static")};
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: var(--light-blue);
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.3rem;
  padding: 0 3.2rem;

  @media (min-width: 768px) {
    height: 9.4rem;
    max-width: 86.3rem;
  }

  @media (min-width: 1200px) {
    max-width: 192rem;
    padding: 0 20rem;
  }
`;

const Logo = styled.img`
  height: 1.6rem;

  @media (min-width: 768px) {
    height: 2.4rem;
  }
`;

const SignInButton = styled.button`
  display: inline-block;
  width: 8rem;
  padding: 1rem 0;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;

  @media (min-width: 768px) {
    width: 12.8rem;
    padding: 1.6rem 0;
    font-size: 1.8rem;
  }
`;

const NavigationBar = ({ profile, isSticky }: NavigationBarProps) => {
  return (
    <Nav $isSticky={isSticky}>
      <NavItems>
        <a href="/">
          <Logo src="/images/linkbrary.svg" alt="로고 이미지" />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <SignInButton>로그인</SignInButton>
        )}
      </NavItems>
    </Nav>
  );
};

export default NavigationBar;
