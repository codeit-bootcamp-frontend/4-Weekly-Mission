import LinkbraryLogo from "../../asset/images/logo.svg";
import Cta from "../Cta/Cta";
import "./NavigationBar.css";
import Profile from "../Profile/Profile";

const NavigationBar = ({ profile }) => {
  return (
    <nav className="NavigationBar">
      <div className="NavigationBar__items">
        <h1>
          <a href="/">
            <img
              className="NavigationBar__logo"
              src={LinkbraryLogo}
              alt="Linkbrary"
            />
          </a>
        </h1>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href="/">
            <Cta>로그인</Cta>
          </a>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
