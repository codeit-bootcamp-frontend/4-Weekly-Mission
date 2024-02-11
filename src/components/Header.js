import logo from '../images/logo.svg';
import '../style/header.css';
import Profile from './Profile';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">
          <img src={logo} alt="로고" />
        </a>
      </div>
      <div className="header-content">
        <Profile />
      </div>
    </header>
  );
}

export default Header;
