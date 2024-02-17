import Profile from "../Profile/Profile";
import logoImage from "../../images/linkbrary.svg";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navigation">
      <Link to="/">
        <img src={logoImage} alt="링크브러리 로고 이미지" />
      </Link>
      <Profile />
    </div>
  );
};

export default Navigation;
