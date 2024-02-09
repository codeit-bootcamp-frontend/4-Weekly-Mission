import "./css/Header.css";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { DEFAULT_USER_ICON_URL } from "../constant";

const Header = ({ userEmail, userProfileImage }) => {
  return (
    <header>
      <Link to="/">
        <img alt="Linkbrary logo" src="icons/Linkbrary.svg" />
      </Link>
      {!userEmail && <button className="btn-gradient login">로그인</button>}
      {userEmail && (
        <div className="profile-container">
          <Avatar
            avatarImage={
              userProfileImage ? userProfileImage : DEFAULT_USER_ICON_URL
            }
            width="28px"
            height="28px"
          />
          <span className="profile-txt">{userEmail}</span>
        </div>
      )}
    </header>
  );
};

export default Header;
