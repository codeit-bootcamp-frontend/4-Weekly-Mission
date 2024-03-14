import { SIGN_KAKAO, SIGN_GOOGLE } from "../../constnats/image";
import * as S from "./FormStyle";

const FormSocial = () => {
  return (
    <S.Container>
      <S.Title>소셜로그인</S.Title>
      <S.BoxIcon>
        <S.Icon src={SIGN_GOOGLE} alt="google" />
        <S.Icon src={SIGN_KAKAO} alt="kakao" />
      </S.BoxIcon>
    </S.Container>
  );
};

export default FormSocial;
