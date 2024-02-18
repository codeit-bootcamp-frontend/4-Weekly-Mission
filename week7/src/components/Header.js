import logoImg from "../assets/Linkbrary.png";
import "./Header.css";
import Folder from "./Folder.js";
import { useMediaQuery } from "react-responsive";
const profileAccount = ({ user }) => {
  if (!user) {
    return false;
  }
  const { email, profileImageSource } = user;
  return (
    <div className="profile-info">
      <img className="logo" src={profileImageSource} alt="프로필 이미지" />
      <div>{email}</div>
    </div>
  );
};
function Header({ user, folderName, owner }) {
  const isTablet = useMediaQuery({ maxWidth: 1199 });
  return (
    <>
      <nav className="nav">
        <div className={isTablet ? "gnb-width-apply" : "gnb"}>
          <a href="/">
            <img alt="로고이미지" src={logoImg} />
          </a>
          {user ? profileAccount({ user }) : <button>Login</button>}
        </div>
      </nav>
      <Folder user={user} folderName={folderName} owner={owner} />
    </>
  );
}

export default Header;
