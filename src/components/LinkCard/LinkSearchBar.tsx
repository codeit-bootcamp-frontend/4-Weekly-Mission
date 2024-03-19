import { useEffect, useState } from "react";
import * as S from "./LinkSearchBar.style";

const submitLinkSearchData = (e: React.FormEvent) => {
  e.preventDefault();
};

const handleInputClearButtonReveal = (
  e: React.FormEvent,
  setIsRevealed: () => void
) => {};

const LinkSearchBar = function () {
  const [isClearButtonRevealed, setIsClearButtonRevealed] = useState(false);
  const [searchedValue, setSearchedValue] = useState("코드잇");
  const [isSearched, setIsSearched] = useState(true);

  // useEffect(() => {
  //   setIsClearButtonRevealed();
  // }, []);

  return (
    <>
      <S.SearchBarWrapper onSubmit={(e) => submitLinkSearchData(e)}>
        <S.Label htmlFor="folderSearch" />
        <S.Input id="folderSearch" placeholder="링크를 검색해 보세요." />
        <S.InputClearButton type="button">
          <img src="modalClose.png" alt="InputClearButton" />
        </S.InputClearButton>
      </S.SearchBarWrapper>
      {isSearched && (
        <S.SearchResult className="lb-h2-semibold">
          <span>{searchedValue}</span>으로 검색한 결과입니다.
        </S.SearchResult>
      )}
    </>
  );
};

export default LinkSearchBar;
