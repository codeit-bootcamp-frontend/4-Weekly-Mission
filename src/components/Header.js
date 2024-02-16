import '../styles/Header.css';
import logo from '../assets/images/logo.svg';

const Header = ({ userInfo }) => {
  const profileImage = userInfo?.profileImageSource;
  const profileEmail = userInfo?.email;

  return (
    <header>
      <nav>
        <img className="main-logo" src={logo} alt="링크라이브러리 로고." />
        {/* 로그인 된 경우 */}
        <div className="profile">
          <img className="profile-image" src={profileImage} alt="사용자의 프로필 이미지." />
          <p className="profile-email">{profileEmail}</p>
        </div>

        {/* 로그인 안 된 경우 */}
        {/* <a className="button-login" href="/pages/signin.html">로그인</a> */}
      </nav>
    </header>
  );
}

export default Header;
