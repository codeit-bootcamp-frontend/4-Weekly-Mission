import Profile from "../PageContent/Profile/Profile.js";
import useUserData from "../../apis/getUserData.js";
import "./NavBar.css";

const NavBar = () => {
  const { data } = useUserData();
  const { email, profileImageSource } = data || {};
  const profile = data ? { email, profileImageSource } : null;

  return (
    <nav>
      <div className="gnb">
        <a href="index.html">
          <img
            className="linkbrary"
            src="image/logo/Linkbrary.svg"
            alt="Linkbrary"
          />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a className="login" href="/signin">
            로그인
          </a>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
