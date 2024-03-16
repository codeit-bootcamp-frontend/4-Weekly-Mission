import Title from "../FormTitle";
import InputEmail from "../FormInput";
import InputPassword from "../FormInput";
import Button from "../../common/Button/Button";
import Social from "../FormSocial";
import * as S from "../FormStyle";

const FormSignin = () => {
  return (
    <S.Form>
      <Title />
      <InputEmail />
      <InputPassword />
      <Button>로그인</Button>
      <Social />
    </S.Form>
  );
};

export default FormSignin;
