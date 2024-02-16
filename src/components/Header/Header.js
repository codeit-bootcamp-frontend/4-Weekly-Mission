import logo from './images/logo.png';

import '../../App.css';
import './Header.css';

export default function Header() {
  return (
    <header id="headerShared">
      <div className="headerLogo">
        <a href="/">
          <img className="logo" src={logo} alt="Linkbrary로고" />
        </a>
      </div>
      <div className="headerButton">
        <button>로그인</button>
      </div>
    </header>
  );
}
