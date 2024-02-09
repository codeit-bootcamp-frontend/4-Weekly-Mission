import mainLogo from "../images/logo_icon/Linkbrary_title_logo.png";
import UserProfile from "./userProfile.js";
import '../css/header/header.css';

function Header() {
  return (
    <>
      <header className="gnb">
        <nav>
          <img className="main-logo" src={mainLogo} alt="링크브러리 로고" />
          <UserProfile />
        </nav>
      </header>
    </>
  );
}

export default Header;