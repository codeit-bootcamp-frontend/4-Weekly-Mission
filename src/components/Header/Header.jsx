import Profile from './Profile';
import logo from './images/logo.png';
import './Header.css';

export default function Header({ style }) {
  return (
    <header className={style}>
      <div className="headerLogo">
        <a href="/">
          <img className="logo" src={logo} alt="Linkbrary로고" />
        </a>
      </div>
      <Profile />
    </header>
  );
}
