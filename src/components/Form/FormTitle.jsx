import { LINKBRARY_LOGO } from "../../constnats/image";
import * as S from "./FormStyle";

const FormTitle = () => {
  return (
    <S.Container>
      <S.Logo src={LINKBRARY_LOGO} alt="logo" />
      <S.TitleBox>
        <S.TitleText>회원이 아니신가요?</S.TitleText>
        <S.TitleLink>회원 가입하기</S.TitleLink>
      </S.TitleBox>
    </S.Container>
  );
};

export default FormTitle;
