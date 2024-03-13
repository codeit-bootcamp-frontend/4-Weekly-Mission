import { Link } from "react-router-dom";
import { LargeButton } from "../../common/Button/ButtonStyle";
import { LANDING_HEADER } from "../../../constnats/image";
import * as S from "./LandingHeaderStyle";

const LandingHeader = () => {
  return (
    <S.Container>
      <S.Title>
        <S.Gradient>세상의 모든 정보</S.Gradient>를 쉽게 저장하고 관리해 보세요
      </S.Title>
      <Link to="/singup">
        <LargeButton>링크 추가하기</LargeButton>
      </Link>
      <S.Image src={LANDING_HEADER} alt="header" />
    </S.Container>
  );
};

export default LandingHeader;
