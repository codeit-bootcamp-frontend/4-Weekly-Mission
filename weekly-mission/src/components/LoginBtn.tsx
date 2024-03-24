import * as S from "./LoginBtn.styled";

const Login: React.FC = () => {
  return (
    <S.LoginBtn>
      <a href="/" className="btn Login">
        로그인
      </a>
    </S.LoginBtn>
  );
};

export default Login;
