import '../styles/Header.css';
import logo from '../assets/images/logo.svg';

function Header() {
  return (
    <header>
      <nav>
        <img className="Main-logo" src={logo} alt="링크라이브러리 로고." />
        {/* 로그인 된 경우 */}
        <div className="Profile">
          <img className="Profile-image" alt="사용자의 프로필 이미지."></img>
          <p className="Profile-email">unknown@email.com</p>
        </div>

        {/* 로그인 안 된 경우 */}
        {/* <a className="Button-login" href="/pages/signin.html">로그인</a> */}
      </nav>
    </header>
  );
}

export default Header;