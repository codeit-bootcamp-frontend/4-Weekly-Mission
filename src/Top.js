import React from 'react';
import Gnb from './components/Gnb';
import './Top.css';
import unionImg from './assets/union.svg';

const Top = ({className=''}) => {
  className = className
  return (
    <div className={className}>
      <Gnb className="gnb_ly"/>
      <div className="top-frame_ly">
        <div className='user_ly'>
          <div className='avatar_ly'>
            <div className='avatar'>
              <img src={unionImg} alt="아바타 이미지"/>
            </div>
            <span className='avatar-name'>@코드잇</span>
          </div>
          <span className='favorite'>⭐️ 즐겨찾기</span>
        </div>
      </div>
    </div>
  )
}

export default Top;