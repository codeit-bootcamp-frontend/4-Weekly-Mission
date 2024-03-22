import React from "react";
import { Profile } from "../Profile/Profile.tsx";
import * as S from "./NavigationStyled.tsx";

interface NavigationBarProps {
  profile: {
    profileImageSource: string;
    email: string;
  };
  isSticky: boolean;
}

const NavigationBar = ({ profile, isSticky }: NavigationBarProps) => {
  return (
    <S.Nav $isSticky={isSticky}>
      <S.NavItems>
        <a href="/">
          <S.Logo src="/images/linkbrary.svg" alt="로고 이미지" />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <S.SignInButton>로그인</S.SignInButton>
        )}
      </S.NavItems>
    </S.Nav>
  );
};

export default NavigationBar;
