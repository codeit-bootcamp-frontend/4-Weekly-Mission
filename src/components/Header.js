import '../styles/Header.css';
import logo from '../assets/images/logo.svg';

const Header = ({ userInfo }) => {
  const profileImage = userInfo?.profileImageSource;
  const profileEmail = userInfo?.email;

  return (
    <header>
      <nav>
        <img className="main-logo" src={logo} alt="링크라이브러리 로고." />
        {userInfo ? (
          <div className="profile">
            <img className="profile-image" src={profileImage} alt="사용자의 프로필 이미지." />
            <p className="profile-email">{profileEmail}</p>
          </div>
        ) : (
          <a className="button-login button-gradient" href="/pages/signin.html">로그인</a>
        )}
      </nav>
    </header>
  );
}

export default Header;
