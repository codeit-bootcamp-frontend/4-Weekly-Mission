import React from 'react'
import './Gnb.css';
import logoImg from '../assets/logo.svg';

const Gnb = ({className, items}) => {
  return (
    <div className={className}>
      <div className='gnb-inner_ly'>
        <a href="/">
          <img className='logo' src={logoImg} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        <div className='account'>
          <img className="account-img" src={items.profileImageSource} alt="로그인 이미지" />
          <span className='account-email'>{items.email}</span>
        </div>
      </div>
    </div> 
  )
}

export default Gnb;