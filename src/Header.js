import LogoIcon from './assets/logo.svg';
import ProfileImg from './assets/profileImg.svg';
import './style.css';

const Header = () => {
  return (
    <header className='header'>
      <img src={LogoIcon} alt="logo icon" />
      <div className='profile-wrapper'>
        <img src={ProfileImg} alt="logo icon" />
        <div>Codeit@codeit.com</div>
      </div>
    </header>
  )
}

export default Header;