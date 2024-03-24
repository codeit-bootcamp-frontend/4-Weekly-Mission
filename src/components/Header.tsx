import '../styles/header.css';
import React from 'react';

import logo from '../assets/logo/logo.svg';

interface Props {
  user: any;
  isSticky: any;
}

const Header = ({ user, isSticky }: Props) => {
  console.log(user);
  const profileImage = user?.profileImageSource ? user?.profileImageSource : user?.image_source;
  const profileEmail = user?.email;
  const sticky = isSticky ? 'sticky' : '';

  return (
    <header className={sticky}>
      <nav>
        <img className='main-logo' src={logo} alt='Linkbrary logo.' />
        {user ? (
          <div className='user-box'>
            <img className='profile-image' src={profileImage} alt='Profile.' />
            <p className='profile-email'>{profileEmail}</p>
          </div>
        ) : (
          <div>로그인</div>
        )}
      </nav>
    </header>
  );
};

export default Header;
