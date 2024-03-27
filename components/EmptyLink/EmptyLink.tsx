import { EMPTY_MESSAGE } from "../CardListEmpty/constant";
import * as S from "./EmptyLinkStyled";
export function EmptyLink() {
  return (
    <S.EmptyLinkContainer className="empty-link">
      <S.IsEmptyText className="isEmpty">{EMPTY_MESSAGE}</S.IsEmptyText>
    </S.EmptyLinkContainer>
  );
}
