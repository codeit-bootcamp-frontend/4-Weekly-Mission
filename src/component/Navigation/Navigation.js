import linkbrary from "../../images/linkbrary.svg";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <div className="Navigation-wrap">
        <a href="/">
          <img src={linkbrary} alt="링크브러리 로고" />
        </a>
        <a>
          <span className="Navigation-signin">로그인</span>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
