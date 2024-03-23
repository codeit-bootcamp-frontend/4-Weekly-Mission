import { useLocation, Link } from "react-router-dom";
import { LINKBRARY_LOGO } from "../../constants/image";
import { NavigationButton } from "../common/Button/ButtonStyle";
import * as S from "./NavigationStyle";

const Navigation = () => {
  const location = useLocation();

  return (
    <S.Container $path={location.pathname}>
      <Link to="/">
        <S.Logo src={LINKBRARY_LOGO} alt="logo" />
      </Link>
      <Link to="/signin">
        <NavigationButton>로그인</NavigationButton>
      </Link>
    </S.Container>
  );
};

export default Navigation;
