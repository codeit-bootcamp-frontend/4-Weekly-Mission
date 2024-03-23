import { EYE_CLOSED } from "constants/image";
import * as S from "./SignInputStyle";

const SignInput = () => {
  return (
    <S.Container>
      <S.Input />
      <S.Image src={EYE_CLOSED} alt="eye" />
    </S.Container>
  );
};

export default SignInput;
