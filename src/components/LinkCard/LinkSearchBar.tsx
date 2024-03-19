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

  // useEffect(() => {
  //   setIsClearButtonRevealed();
  // }, []);

  return (
    <S.SearchBarWrapper onSubmit={(e) => submitLinkSearchData(e)}>
      <S.Label htmlFor="folderSearch" />
      <S.Input id="folderSearch" placeholder="링크를 검색해 보세요." />
      <S.InputClearButton type="button">
        <img src="modalClose.png" alt="InputClearButton" />
      </S.InputClearButton>
    </S.SearchBarWrapper>
  );
};

export default LinkSearchBar;
