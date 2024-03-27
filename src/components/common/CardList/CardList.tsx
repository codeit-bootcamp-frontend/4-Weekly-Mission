import React, { ReactNode } from "react";
import * as S from "./CardListStyled.tsx";

interface CardListProps {
  children: ReactNode;
}

function CardList({ children }: CardListProps) {
  return <S.CardList>{children}</S.CardList>;
}

export default CardList;
