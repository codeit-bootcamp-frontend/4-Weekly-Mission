import { Link } from "react-router-dom";
import { LINKBRARY_LOGO } from "../../constnats/image";
import { NavigationButton } from "../common/Button/ButtonStyle";
import * as S from "./NavigationStyle";

const Navigation = () => {
  return (
    <S.Container>
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
