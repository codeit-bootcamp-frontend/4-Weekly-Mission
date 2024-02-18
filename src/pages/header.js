import '../styles/header.css';
import logo from '../assets/logo/logo.svg';

const Header = ({ userInfo }) => {
  const profileImage = userInfo?.profileImageSource;
  const profileEmail = userInfo?.email;

  return (
    <header>
      <nav>
        <img className='main-logo' src={logo} alt='Linkbrary logo.' />
        <div className>
          <img className='profile-image' src={profileImage} alt='Profile.' />
          <p className='profile-email'>{profileEmail}</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
