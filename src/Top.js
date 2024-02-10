import React from 'react';
import './Top.css';

const Top = ({className, items}) => {
  return (
    <div className={className}>
      <div className="top-frame_ly">
        <div className='user_ly'>
          <div className='avatar_ly'>
            <img className="avatar-img" src={items.owner.profileImageSource} alt="아바타 이미지"/>
            <span className='avatar-name'>{items.owner.name}</span>
          </div>
          <span className='favorite'>{items.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Top;