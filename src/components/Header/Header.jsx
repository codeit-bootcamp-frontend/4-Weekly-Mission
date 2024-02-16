import HeaderLogoImg from '../../assets/header-logo.svg';
import { useEffect, useState } from 'react';
import { API_PATH } from '../../services/api-path';
import { Link } from 'react-router-dom';
import '../../styles/header.css';

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
    <header className='gnb'>
      <nav className='gnb__nav'>
        <Link to='/'>
          <img className='gnb__logoImg' src={HeaderLogoImg} alt='로고 이미지' />
        </Link>
        {userInfo.loginStatus ? (
          <div className='gnb__userInfo'>
            <img className='gnb__userImg' src={userInfo.profileImg} alt='헤더 유저 이미지' />
            <span className='gnb__email'>{userInfo.email}</span>
          </div>
        ) : (
          <Link className='gnb__login' to='/signin'>
            로그인
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
