import './navbar.css';
import { useAuth } from '../../../contexts/AuthContext';
import MainLogo from '../../../assets/icons/logo.svg';
import Button from '../../common/Button/Button';

const Navbar = () => {
  const { user } = useAuth();
  const handleLoginButton = () => {
    /** 후에 dom 연결 */
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/" className="navbar-logo-link">
            <img src={MainLogo} alt="Linkbrary Logo" />
          </a>
        </li>
        <li className="navbar-item">
          {user ? (
            <div className="navbar-profile">
              <img
                className="navbar-userprofile-img"
                src={user.profileImageSource}
                alt="User Profile"
              />
              <span className="navbar-userprofile-email">{user.email}</span>
            </div>
          ) : (
            <Button className="navbar-login-button" onClick={handleLoginButton}>
              로그인
            </Button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
