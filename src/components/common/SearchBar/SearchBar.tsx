import React from "react";
import * as S from "./SearchBarStyled.tsx";

function SearchBar({ searchTerm, setSearchTerm, setShowSearchResult }) {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setShowSearchResult(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setShowSearchResult(true);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setShowSearchResult(false);
  };

  return (
    <div>
      <S.SearchBar>
        <S.Input
          type="search"
          placeholder="링크를 검색해 보세요."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <S.SearchIcon
          src="./images/search.svg"
          alt="검색창인 것을 알려주는 돋보기 아이콘"
        />
        <S.CloseIcon
          src="./images/close.svg"
          alt="닫기 아이콘"
          onClick={handleClearSearch}
        />
      </S.SearchBar>
    </div>
  );
}

export default SearchBar;
