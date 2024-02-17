import "../css/home.css";
import logo from "../image/logo.svg";
import Email from "./email";

function Header() {
  return (
    <>
      <header className="top">
        <nav id="top_div">
          <img className="logo_img" src={logo} alt="로고 이미지" />
          <Email className="login_btn btn" />
        </nav>
      </header>
    </>
  );
}

export default Header;
