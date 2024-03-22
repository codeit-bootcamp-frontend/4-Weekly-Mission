import React from "react";
import * as S from "./SearchBarStyled.tsx";

function SearchBar() {
  return (
    <S.SearchBar>
      <S.Input type="search" placeholder="링크를 검색해 보세요." />
      <S.Icon
        src="./images/search.svg"
        alt="검색창인 것을 알려주는 돋보기 아이콘"
        className="SearchBar-icon"
      />
    </S.SearchBar>
  );
}

export default SearchBar;
