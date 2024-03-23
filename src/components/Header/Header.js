import logo from '../../images/logo.svg';
import './Header.css';
import Profile from '../Profile';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="로고" />
        </Link>
      </div>
      <div className="header-content">
        <Profile />
      </div>
    </header>
  );
}

export default Header;
