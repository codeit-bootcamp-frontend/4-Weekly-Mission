import logo from '../images/logo.png';

import '../App.css';
import '../style/shared.css';

export default function Header() {
  return (
    <header>
      <div className="headerLogo">
        <a href="/">
          <img className="logo" src={logo} alt="Linkbrary로고" />
        </a>
      </div>
      <div className="headerBtn">
        <button>로그인</button>
      </div>
    </header>
  );
}
