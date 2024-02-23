import "../style/header.css";
import logo from "../image/logo.svg";
import UserInfo from "./UserInfo";

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="로고" />
          </a>
        </div>
        <div className="userinfo">
          <UserInfo />
        </div>
      </header>
    </>
  );
}

export default Header;
