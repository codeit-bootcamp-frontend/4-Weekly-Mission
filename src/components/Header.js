import '../styles/Header.css';
import linkbraryLogo from '../assets/linkbrary-logo.svg';

function Header() {
  return (
    <header className="header-area">
      <div className="header-group">
        <a href="/" className="logo-area">
          <img src={linkbraryLogo} alt="로고" className="logo-img" />
        </a>
        <a className="btn" href="/signin.html">
          로그인
        </a>
      </div>
    </header>
  );
}

export default Header;
