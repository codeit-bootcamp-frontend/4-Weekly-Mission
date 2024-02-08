import mainLogo from "../images/logo_icon/Linkbrary_title_logo.png";
import '../css/header/header.css';

function Header() {
  return (
    <>
      <header className="gnb">
        <nav>
          <img className="main-logo" src={mainLogo} alt="링크브러리 로고" />
          <div className="userProfile">반갑고~!</div>
        </nav>
      </header>
    </>
  );
}

export default Header;