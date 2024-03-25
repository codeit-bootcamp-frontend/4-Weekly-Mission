import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderLogoImg from '../../assets/header-logo.svg';
import { API_PATH } from '../../services/api-path';
import * as Styled from './Header.styled';

interface UserInfo {
  loginStatus: boolean;
  email: string;
  profileImg: string;
}

interface HeaderProps {
  isSticky?: boolean;
}

function Header({ isSticky = true }: HeaderProps) {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    loginStatus: false,
    email: '',
    profileImg: ''
  });

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const userData = async (): Promise<void> => {
      try {
        const response = await fetch(API_PATH.HEADER_USER_INFO, {
          method: 'GET',
          signal
        });
        if (!response.ok) {
          throw new Error('API 요청 에러 발생');
        }
        const result = await response.json();
        setUserInfo({
          loginStatus: true,
          email: result.data[0].email,
          profileImg: result.data[0].image_source
        });
      } catch (e) {
        console.error(e);
      }
    };
    userData();
    // 중복 처리
    return () => controller.abort();
  }, []);

  return (
    <Styled.Header $isSticky={isSticky}>
      <Styled.Nav>
        <Link to="/">
          <img src={HeaderLogoImg} alt="헤더 로고 이미지" />
        </Link>
        {userInfo.loginStatus ? (
          <Styled.UserInfoBox>
            <Styled.UserImage src={userInfo.profileImg} alt="헤더 유저 이미지" />
            <Styled.UserEmail>{userInfo.email}</Styled.UserEmail>
          </Styled.UserInfoBox>
        ) : (
          <Styled.LoginButton to="/signin">로그인</Styled.LoginButton>
        )}
      </Styled.Nav>
    </Styled.Header>
  );
}

export default Header;
