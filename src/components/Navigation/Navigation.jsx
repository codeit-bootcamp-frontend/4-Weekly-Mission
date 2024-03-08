import { Link } from "react-router-dom";
import { LINKBRARY_LOGO } from "../../constnats/image";
import Button from "../common/Button/Button";
import * as S from "./NavigationStyle";

const Navigation = () => {
  return (
    <S.Container>
      <Link to="/">
        <S.Logo src={LINKBRARY_LOGO} alt="logo" />
      </Link>
      <Link to="/signin">
        <Button>로그인</Button>
      </Link>
    </S.Container>
  );
};

export default Navigation;
