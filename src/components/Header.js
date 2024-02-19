import '../styles/Header.css';
import logo from '../assets/images/logo.svg';

const Header = ({ userInfo, isSticky = true }) => {
  const profileImage = userInfo?.profileImageSource ? userInfo?.profileImageSource : userInfo?.image_source;
  const profileEmail = userInfo?.email;
  const sticky = isSticky ? "sticky" : "";

  return (
    <header className={sticky}>
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
