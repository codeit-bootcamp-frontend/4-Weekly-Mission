import Profile from "../Profile";
import logoImage from "../../images/linkbrary.svg";
import { Link } from "react-router-dom";
import { Nav } from "./style";

const Navigation = () => {
  return (
    <Nav>
      <Link to="/">
        <img src={logoImage} alt="링크브러리 로고 이미지" />
      </Link>
      <Profile />
    </Nav>
  );
};

export default Navigation;
