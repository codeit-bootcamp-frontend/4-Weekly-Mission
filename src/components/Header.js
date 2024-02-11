import React from 'react';
import Logo_Img from '../assets/logo.svg'

function Header({ user }) {
  // const userEmail = user.email;
  // const userImg = user.profileImageSource;

  console.log(user);


  return (
    <div>
      <a href='/'>
        <img src={Logo_Img} alt="Logo" />
      </a>
      <div>
        {user ? (
          <>
            <img src={user.profileImageSource} alt="프로필 사진" className="user-profile" />
            <span className="user-email">{user.email}</span>
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