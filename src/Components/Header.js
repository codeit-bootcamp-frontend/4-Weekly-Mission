import "./css/Header.css";
import Avatar from "./Avatar";

const Header = ({ userEmail, userProfileImage }) => {
  return (
    <header>
      <img alt="Linkbrary logo" src="icons/Linkbrary.svg" />
      {!userEmail && <button className="btn_gradient login">로그인</button>}
      {userEmail && (
        <div className="container-profile">
          <Avatar
            avatarImage={
              userProfileImage === null
                ? "icons/default_user_icon.svg"
                : userProfileImage
            }
            width="28px"
            height="28px"
          />
          <span className="txt-profile">{userEmail}</span>
        </div>
      )}
    </header>
  );
};

export default Header;
