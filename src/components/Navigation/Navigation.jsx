import { LINKBRARY_LOGO } from "../../constnats/image";
import Button from "../common/Button/Button";
import * as S from "./NavigationStyle";

const Navigation = () => {
  return (
    <S.Container>
      <S.Logo src={LINKBRARY_LOGO} alt="logo" />
      <Button>로그인</Button>
    </S.Container>
  );
};

export default Navigation;
