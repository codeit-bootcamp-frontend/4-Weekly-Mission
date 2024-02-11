import logo from "../../assets/logo.svg";
import "../../style/landing.css";
import ProfileBox from "./ProfileBox";

const LOGO_IMAGE = logo;

function GeneralNavigationBar() {
  return (
    <nav>
      <div className="gnb">
        <a>
          <img src={LOGO_IMAGE} alt="logo" />
        </a>
        <ProfileBox />
      </div>
    </nav>
  );
}

export default GeneralNavigationBar;
