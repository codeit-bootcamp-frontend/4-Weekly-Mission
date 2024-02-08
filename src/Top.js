import React from 'react';
import Gnb from './components/Gnb';
import './Top.css';

const Top = () => {
  return (
    <>
      <Gnb className="gnb_ly"/>
      <div className="top-frame_ly">
        <div className='user'>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Top;