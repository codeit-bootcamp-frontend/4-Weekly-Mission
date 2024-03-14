import Title from "../FormTitle";
import InputEmail from "../FormInput";
import InputPassword from "../FormInput";
import Button from "../../common/Button/Button";
import Social from "../FormSocial";
import * as S from "./FomSigninStyle";

const FormSignin = () => {
  return (
    <S.Container>
      <Title />
      <InputEmail />
      <InputPassword />
      <Button />
      <Social />
    </S.Container>
  );
};

export default FormSignin;
