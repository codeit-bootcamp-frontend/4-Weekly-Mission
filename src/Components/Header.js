import "./css/Header.css";
import Avatar from "./Avatar";

const Header = ({ isSigned }) => {
  return (
    <header>
      <img alt="Linkbrary logo" src="icons/Linkbrary.svg" />
      {!isSigned && <button className="btn_gradient login">로그인</button>}
      {isSigned && (
        <div className="container-profile">
          <Avatar
            avatarImage="icons/default_user_icon.svg"
            width="28px"
            height="28px"
          />
          <span className="txt-profile">Codeit@codeit.com</span>
        </div>
      )}
    </header>
  );
};

export default Header;
