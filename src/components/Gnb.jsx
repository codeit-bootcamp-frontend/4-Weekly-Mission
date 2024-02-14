import { useState, useEffect } from 'react';

import { getUser } from '../apis/api';
import logoImg from '../assets/logo.svg';

import './Gnb.css';

const Gnb = ({className}) => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await getUser();
      
      setUsers(userInfo);
    };

    fetchUser();
  }, []);

  const isShowProfile = users && users.profileImageSource && users.email;

  return (
    <nav className={className}>
      <div className='gnb-inner_ly'>
        <a href="/">
          <img className='logo' src={logoImg} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {isShowProfile ? (
          <div className='account'>
            <img className="account-img" src={users.profileImageSource} alt={`${users.email} 프로필`} />
            <span className='account-email'>{users.email}</span>
          </div>
        ) : (
          <button className='login-button'>로그인</button>
        )}
      </div>
    </nav> 
  )
}

export default Gnb;