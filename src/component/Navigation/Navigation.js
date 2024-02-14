import Profile from "../Profile/Profile";
import logoImage from "../../images/linkbrary.svg";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="Navigation">
      <img src={logoImage} alt="링크브러리 로고 이미지" />
      <Profile />
    </div>
  );
};

export default Navigation;
