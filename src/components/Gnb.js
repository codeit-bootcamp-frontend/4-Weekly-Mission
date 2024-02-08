import React from 'react'
import './Gnb.css';
import logoImg from '../assets/logo.svg';
import profileImg from '../assets/ellipse.svg'; 

const Gnb = ({className=''}) => {
  className = className;

  return (
    <div className={className}>
      <div className='gnb-inner_ly'>
        <a href="/">
          <img className='logo' src={logoImg} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        <div className='account'>
          <img src={profileImg} alt="로그인 이미지" />
          <span className='account-email'>Codeit@codeit.com</span>
        </div>
      </div>
    </div> // ly
  )
}

export default Gnb;