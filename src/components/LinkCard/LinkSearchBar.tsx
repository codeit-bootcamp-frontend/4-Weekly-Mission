import * as S from "./LinkSearchBar.style";

const LinkSearchBar = function () {
  return (
    <S.SearchBarWrapper>
      <S.Label htmlFor="folderSearch" />
      <S.Input id="folderSearch" placeholder="링크를 검색해 보세요." />
    </S.SearchBarWrapper>
  );
};

export default LinkSearchBar;
