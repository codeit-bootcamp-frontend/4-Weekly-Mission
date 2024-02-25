import { useState } from "react";
import logo from "../../imgs/logo.svg";
import "./Header.css";
import ProfileComponent from "../profile/ProfileComponent";

function Header({ sharedSticky }) {
  const [showProfile, setShowProfile] = useState(false);

  const handleLoginClick = () => {
    setShowProfile(true);
  };

  return (
    // sharedSticky를 props로 전달받아 유효한지, 유효하지 않은지 지정한다.
    <header className={sharedSticky ? "topnav shared" : "topnav"}>
      <div className="topnav__size">
        <a href="/" className="topnav__logo">
          <img src={logo} alt="logo" />
        </a>
        {showProfile ? (
          <ProfileComponent />
        ) : (
          <button onClick={handleLoginClick} className="topnav__loginBt">
            로그인
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
