import './Header.css';
import { useLocation } from 'react-router-dom';
import linkbraryLogo from '../../../assets/linkbrary-logo.svg';

function Header({ user }) {
  const { pathname } = useLocation();
  // eslint-disable-next-line dot-notation
  const profileImageUrl = user ? user.profileImageSource || user['image_source'] : '';

  return (
    <header className={`header-area ${pathname === '/folder' ? 'static' : ''}`}>
      <div className="header-group">
        <a href="/" className="logo-area">
          <img src={linkbraryLogo} alt="로고" className="logo-img" />
        </a>
        <button className="btn-group">
          {user ? (
            <>
              <img src={profileImageUrl} alt="프로필 사진" className="user-profile" />
              <span className="user-email">{user.email}</span>
            </>
          ) : (
            <a className="btn signin" href="/signin.html">
              로그인
            </a>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
