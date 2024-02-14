import "../assets/styles/Navbar.css";
import logo from "../assets/images/logo.png";

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
      <div className="nav_container">
        <a href="/">
          <img src={logo} alt="logo" id="logoImg" />
        </a>
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