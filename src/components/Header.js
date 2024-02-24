import "../css/Header.css";
import FolderInfo from "./FolderInfo";
import LinkAddForm from "./LinkAddForm";

function Header() {
  return (
    <header className="header-main">
      {window.location.pathname === "/shared" ? (
        <FolderInfo />
      ) : (
        <LinkAddForm />
      )}
    </header>
  );
}

export default Header;
