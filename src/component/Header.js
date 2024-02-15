import "../style/header.css";
import logo from "../image/logo.svg";
import UserInfo from "./UserInfo";
import FolderInfo from "./FolderInfo";

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
      <FolderInfo />
    </>
  );
}

export default Header;
