import "../../assets/styles/Navbar.css";
import logoImg from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const UserInfo = ({ email, imgSrc }) => {
  return (
    <div className="userInfo">
      <img id="userImg" src={imgSrc} alt="userImage" />
      <a id="userEmail">{email}</a>
    </div>
  );
};

const Nav = ({ email, imgSrc }) => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <img src={logoImg} alt="logo" id="logoImg" />
        </Link>
        {email ? (
          <UserInfo email={email} imgSrc={imgSrc} />
        ) : (
          <button className="color-btn">로그인</button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
