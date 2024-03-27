import { PropsWithChildren } from "react";
import * as S from "./CardListStyled";

export const CardList = ({ children }: PropsWithChildren) => {
  return (
    <S.CardListContainer className="CardList">{children}</S.CardListContainer>
  );
};
