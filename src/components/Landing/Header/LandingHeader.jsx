import Button from "../../../components/common/Button/Button";
import { HEADER_BUTTON } from "../../../constnats/constant";
import { LANDING_HEADER } from "../../../constnats/image";
import * as S from "./LandingHeaderStyle";

const LandingHeader = () => {
  return (
    <S.Container>
      <S.Title>
        <S.Gradient>세상의 모든 정보</S.Gradient>를 쉽게 저장하고 관리해 보세요
      </S.Title>
      <Button size={HEADER_BUTTON}>링크 추가하기</Button>
      <S.Image src={LANDING_HEADER} alt="header" />
    </S.Container>
  );
};

export default LandingHeader;
