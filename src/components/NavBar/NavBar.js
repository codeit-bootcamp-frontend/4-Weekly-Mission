import Logo from "../../assets/images/logo.png";

import "./NavBar.css";
import { Profile } from "../Profile/Profile";

const NavBar = ({ userProfile }) => {
  return (
    <nav>
      <div className="nav">
        <a href="/">
          <img src={Logo} alt="Linkbrary 로고" />
        </a>
        {userProfile ? (
          <Profile userProfile={userProfile} />
        ) : (
          <a className="login-btn" href="./html/signIn.html">
            로그인
          </a>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
