import mainLogo from "../images/logo_icon/Linkbrary_title_logo.png";

function Header() {
  return (
    <header className="gnb">
      <img src={mainLogo} alt="링크브러리 로고" />
      <div></div>
    </header>
  );
}

export default Header;