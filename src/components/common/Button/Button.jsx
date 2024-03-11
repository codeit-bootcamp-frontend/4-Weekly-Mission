import * as S from "./ButtonStyle";

const Button = ({ children, size }) => {
  return <S.Button size={size}>{children}</S.Button>;
};

export default Button;
