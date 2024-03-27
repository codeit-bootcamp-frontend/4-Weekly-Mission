import * as S from "./SearchResultCommentStyled";

export function SearchResultComment({
  searchKeyWord,
}: {
  searchKeyWord: string;
}) {
  return (
    <S.ResultComment>
      <S.SearchKeyWord className="searchKeyWord">
        {searchKeyWord}
      </S.SearchKeyWord>
      으로 검색한 결과입니다.
    </S.ResultComment>
  );
}
