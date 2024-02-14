import '../styles/Header.css';
import logo from '../assets/images/logo.svg';

function Header() {
  return (
    <header>
      <nav>
        <img className="main-logo" src={logo} alt="링크라이브러리 로고." />
        {/* 로그인 된 경우 */}
        <div className="profile">
          <img className="profile-image" alt="사용자의 프로필 이미지." />
          <p className="profile-email">unknown@email.com</p>
        </div>

        {/* 로그인 안 된 경우 */}
        {/* <a className="button-login" href="/pages/signin.html">로그인</a> */}
      </nav>
    </header>
  );
}

export default Header;
