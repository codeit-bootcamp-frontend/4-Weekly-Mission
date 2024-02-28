import '../styles/header.css';
import logo from '../assets/logo/logo.svg';

const Header = ({ userInfo, isSticky }) => {
  const profileImage = userInfo?.profileImageSource ? userInfo?.profileImageSource : userInfo?.image_source;
  const profileEmail = userInfo?.email;
  const sticky = isSticky ? 'sticky' : '';

  return (
    <header className={sticky}>
      <nav>
        <img className='main-logo' src={logo} alt='Linkbrary logo.' />
        {userInfo ? (
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
