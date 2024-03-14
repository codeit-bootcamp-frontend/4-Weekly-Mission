import Title from "../FormTitle";
import InputEmail from "../FormInput";
import InputPassword from "../FormInput";
import InputPasswordCheck from "../FormInput";
import Button from "../../common/Button/Button";
import Social from "../FormSocial";
import * as S from "../FormStyle";

const FormSignup = () => {
  return (
    <S.Form>
      <Title />
      <InputEmail />
      <InputPassword />
      <InputPasswordCheck />
      <Button />
      <Social />
    </S.Form>
  );
};

export default FormSignup;
