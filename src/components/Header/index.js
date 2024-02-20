import React from 'react';
import Logo_Img from '../../assets/logo.svg'
import '../Header/Header.css'

function Header({ user }) {

  return (
    <div className='headerWrapper'>
      <a href='/'>
        <img src={Logo_Img} alt="Logo" />
      </a>
      <div className='Profile'>
        {user ? (
          <>
            <img className="Profile-image" src={user.profileImageSource} alt="프로필 사진" />
            <span className="Profile-email">{user.email}</span>
          </>
        ) : (
          <a href="/">
            로그인
          </a>
        )}

      </div>
    </div>
  )
}

export default Header;