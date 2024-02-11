import logoImg from '../images/logo.svg';
import profileImg from '../images/profile.svg';
import '../css/NavBar.css';

function NavBar() {
  return (
    <nav>
      <div className="gnb">
        <a className="logo" href="/">
          <img className="button-logo" src={logoImg} alt="Linkbrary 로고" />
        </a>
        <a href="/src/components/SignIn.js">
          <div className="profile">
            <img className="profile-img" src={profileImg} alt="프로필 이미지" />
            <span className="profile-id">Codeit@codeit.com</span>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
