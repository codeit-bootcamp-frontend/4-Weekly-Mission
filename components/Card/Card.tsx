import * as S from "./CardStyled";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onMouseOver: () => void;
  onMouseLeave: () => void;
}

export const Card = ({ children, onMouseOver, onMouseLeave }: Props) => {
  return (
    <S.CardContainer onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {children}
    </S.CardContainer>
  );
};
