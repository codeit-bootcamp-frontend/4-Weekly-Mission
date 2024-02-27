import logoImg from "../../assets/Linkbrary.png";
import "./FolderHeader.css";
import AddLink from "./AddLink.js";
import { useMediaQuery } from "react-responsive";
const profileAccount = ({ user, imageSource, email }) => {
  if (!user) {
    return false;
  }

  return (
    <div className="profile-info">
      <img className="logo" src={imageSource} alt="프로필 이미지" />
      <div>{email}</div>
    </div>
  );
};
function FolderHeader({ user, imageSource, email, onClick }) {
  const isTablet = useMediaQuery({ maxWidth: 1199 });
  return (
    <>
      <form>
        <nav className="folder-nav">
          <div className={isTablet ? "gnb-width-apply" : "gnb"}>
            <a href="/">
              <img alt="로고이미지" src={logoImg} />
            </a>
            {user ? (
              profileAccount({ user, imageSource, email })
            ) : (
              <button type="submit">Login</button>
            )}
          </div>
        </nav>
      </form>
      <AddLink setIsShowModal={onClick} />
    </>
  );
}

export default FolderHeader;
