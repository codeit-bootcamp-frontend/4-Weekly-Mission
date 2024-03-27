import FolderProfile from "./FolderProfile";
import "../styles/header.css";

function FolderHeader() {
  return (
    <header className="header">
      <a href="/">
        <img className="header-logo" src="img/logo.svg" alt="홈 연결 로고" />
      </a>
      <div className="header-profile">
        <FolderProfile />
      </div>
    </header>
  );
}

export default FolderHeader;
