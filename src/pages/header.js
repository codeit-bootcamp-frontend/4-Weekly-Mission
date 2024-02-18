import '../styles/header.css';
import logo from '../assets/logo/logo.svg';

const Header = ({ userInfo }) => {
  return (
    <header>
      <nav>
        <img className='main-logo' src={logo} alt='Linkbrary logo.' />
        <div className>
          <img className='profile-image' src={userInfo?.profileImageSource} alt='Profile.' />
          <p className='profile-email'>{userInfo?.email}</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
