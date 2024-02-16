import logo from '../images/logo.svg';
import '../style/header.css';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import SharedNav from './SharedNav';

function SharedHeader() {
  return (
    <>
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
      <SharedNav />
    </>
  );
}

export default SharedHeader;
