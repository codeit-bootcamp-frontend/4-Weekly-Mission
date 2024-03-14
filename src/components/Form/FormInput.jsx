import SignInput from "../common/Input/SignInput/SignInput";
import * as S from "./FormStyle";

const FormInput = ({ children }) => {
  return (
    <S.Container>
      <S.Title>{children}</S.Title>
      <SignInput />
      <S.Error>sds</S.Error>
    </S.Container>
  );
};

export default FormInput;
