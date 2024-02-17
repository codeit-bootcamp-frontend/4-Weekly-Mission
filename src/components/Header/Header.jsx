import HeaderLogoImg from '../../assets/header-logo.svg';
import { useEffect, useState } from 'react';
import { API_PATH } from '../../services/api-path';
import { Link } from 'react-router-dom';
import * as Styled from './Header.styled';

function Header() {
  const [userInfo, setUserInfo] = useState({
    loginStatus: false,
    email: '',
    profileImg: '',
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const userData = async () => {
      try {
        const response = await fetch(API_PATH.HEADER_USER_INFO, {
          method: 'GET',
          signal,
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error('API 요청 에러 발생');
        }
        setUserInfo({
          loginStatus: true,
          email: result.data[0].email,
          profileImg: result.data[0].image_source,
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
    <Styled.Header>
      <Styled.Nav>
        <Link to='/'>
          <img src={HeaderLogoImg} alt='헤더 로고 이미지' />
        </Link>
        {userInfo.loginStatus ? (
          <Styled.UserInfoBox>
            <Styled.UserImage src={userInfo.profileImg} alt='헤더 유저 이미지' />
            <Styled.UserEmail>{userInfo.email}</Styled.UserEmail>
          </Styled.UserInfoBox>
        ) : (
          <Styled.LoginButton to='/signin'>로그인</Styled.LoginButton>
        )}
      </Styled.Nav>
    </Styled.Header>
  );
}

export default Header;
