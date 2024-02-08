import "./css/Header.css";
import Avatar from "./Avatar";

const Header = ({ isSigned }) => {
  return (
    <header>
      <img alt="Linkbrary logo" src="images/Linkbrary_small_logo.png" />
      {!isSigned && <button className="btn_gradient login">로그인</button>}
      {isSigned && (
        <div className="container-profile">
          <Avatar
            avatarImage="images/default_user_logo.png"
            width="28px"
            height="28px"
          />
          Codeit@codeit.com
        </div>
      )}
    </header>
  );
};

export default Header;
