import Profile from "./Profile";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img className="header-logo" src="img/logo.svg" alt="홈 연결 로고" />
      </a>
      <div className="header-profile">
        <Profile />
      </div>
    </header>
  );
}

export default Header;
