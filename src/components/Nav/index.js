import "./Nav.css";
import LOGO_IMAGE  from "../../images/linkbrary.svg";
import { ROUTE } from "../../utils/constant";
import { Profile } from "../Profile";


const TEXT = {
    login: "로그인",
};  

export const Nav = ({ profile }) => {
  return (
    <nav className="NavigationBar">
      <div className="NavigationBar-items">
        <a href={ROUTE.랜딩}>
          <img className="NavigationBar-logo" src={LOGO_IMAGE} alt="Linkbrary 서비스 로고" />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a className="NavigationBar-signin-link" href={ROUTE.로그인}>
            <span className="NavigationBar-signin">{TEXT.login}</span>
          </a>
        )}
      </div>
    </nav>
  );
};