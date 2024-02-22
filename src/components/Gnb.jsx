import { useState, useEffect } from 'react';

import { getUser } from '../apis/api';
import logoImg from '../assets/logo.svg';

import './Gnb.css';

const Gnb = ({ className, isFixed }) => {
  const [user, setUser] = useState({});

  const gnbStyle = {
    position: isFixed ? 'sticky' : 'static',
    top: 0,
    zIndex: 1020
  }

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await getUser();
      const [user] = data;

      setUser(user); 
      // 하드 코딩 이유: 아마, 회원 인증에서 처리해 users의 넘버를 넘겨 유저들 배열 중에서 특정 유저에 대한 정보로 접근할 듯합니다.
      // 따라서, 현재로서는 동적으로 접근하는 방법이 떠오르지 않아, 하드 코딩을 진행했습니다.
    };

    fetchUser();
  }, []);

  const isShowProfile = user && user.image_source && user.email;

  return (
    <nav className={className} style={gnbStyle}>
      <div className='gnb-inner_ly'>
        <a href="/">
          <img className='logo' src={logoImg} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {isShowProfile ? (
          <div className='account'>
            <img className="account-img" src={user.image_source} alt={`${user.email} 프로필`} />
            <span className='account-email'>{user.email}</span>
          </div>
        ) : (
          <button className='login-button' type='button'>로그인</button>
        )}
      </div>
    </nav> 
  )
}

export default Gnb;
