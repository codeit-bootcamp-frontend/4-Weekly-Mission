import LOGO_IMAGE  from "../../images/linkbrary.svg";
import "./Nav.css";
import { ROUTE } from "../../utils/constant";


const TEXT = {
    login: "로그인",
};  

export const Nav = () => {
    return (
      <nav className="NavigationBar">
        <div className="NavigationBar-items">
          <a href={ROUTE.랜딩}>
            <img className="NavigationBar-logo" src={LOGO_IMAGE} alt="Linkbrary 서비스 로고" />
          </a>
          <a href={ROUTE.로그인}>
            <span className="NavigationBar-signin">{TEXT.login}</span>
          </a>
        </div>
      </nav>
    );
};