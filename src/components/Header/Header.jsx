import HeaderLogoImg from '../../assets/mainlogo.svg';
import HeaderUserInfo from './HeaderUserInfo';
import HeaderLoginButton from './HeaderLoginButton';
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
        const response = await fetch(API_PATH.SAMPLE_USER_INFO, {
          method: 'GET',
          signal,
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error('API 요청 에러 발생');
        }
        setUserInfo({
          loginStatus: true,
          email: result.email,
          profileImg: result.profileImageSource,
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
        {userInfo.loginStatus ? <HeaderUserInfo {...userInfo} /> : <HeaderLoginButton />}
      </nav>
    </header>
  );
}

export default Header;
