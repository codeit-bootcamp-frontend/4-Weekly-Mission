import linkbrary from "../../images/linkbrary.svg";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <div className="Wrap">
        <a href="/">
          <img src={linkbrary} alt="링크브러리 로고" />
        </a>
        <a href="/">
          <span className="Signin">로그인</span>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
