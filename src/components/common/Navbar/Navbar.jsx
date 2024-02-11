import './navbar.css';
import MainLogo from '../../../assets/icons/logo.svg';
import Button from '../Button/Button';

const Navbar = ({ user }) => {
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
          {!user ? (
            <Button className="navbar-login-button" onClick={handleLoginButton}>
              로그인
            </Button>
          ) : (
            <div className="navbar-profile">
              <img
                className="navbar-userprofile-img"
                src={user.profileImageSource}
                alt="User Profile"
              />
              <span className="navbar-userprofile-email">{user.email}</span>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
