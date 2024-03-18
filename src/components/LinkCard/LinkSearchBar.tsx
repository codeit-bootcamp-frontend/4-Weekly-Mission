import { useState } from "react";
import * as S from "./LinkSearchBar.style";

const submitLinkSearchData = (e: React.FormEvent) => {
  e.preventDefault();
};

const handleInputClearButtonReveal = (
  e: React.FormEvent,
  isRevealed: any,
  setIsRevealed: any
) => {};

const LinkSearchBar = function () {
  const [isClearButtonRevealed, setisClearButtonRevealed] = useState(false);

  return (
    <S.SearchBarWrapper onSubmit={(e) => submitLinkSearchData(e)}>
      <S.Label htmlFor="folderSearch" />
      <S.Input id="folderSearch" placeholder="링크를 검색해 보세요." />
    </S.SearchBarWrapper>
  );
};

export default LinkSearchBar;
