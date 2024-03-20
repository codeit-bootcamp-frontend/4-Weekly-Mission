import { ReactNode } from "react";
import * as S from "./ButtonStyle";

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;
