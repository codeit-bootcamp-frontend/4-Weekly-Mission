import { useRef } from "react";
import * as S from "./LinkSearchBar.style";

interface LinkSearchBarPropType {
  cardFilter: string;
  setCardFilter: (arg: string) => void;
}

const LinkSearchBar = function ({
  cardFilter,
  setCardFilter,
}: LinkSearchBarPropType) {
  const linkFilterRef = useRef<HTMLInputElement>(null);

  const submitLinkSearchData = (e: React.FormEvent) => {
    e.preventDefault();
    setCardFilter(linkFilterRef.current!.value);
  };

  const cardFilterClear = () => {
    setCardFilter("");
    linkFilterRef.current!.value = "";
  };

  return (
    <>
      <S.SearchBarWrapper onSubmit={(e) => submitLinkSearchData(e)}>
        <S.Label htmlFor="folderSearch" />
        <S.Input
          id="folderSearch"
          placeholder="링크를 검색해 보세요."
          ref={linkFilterRef}
        />
        {cardFilter && (
          <S.InputClearButton type="button" onClick={() => cardFilterClear()}>
            <img src="modalClose.png" alt="InputClearButton" />
          </S.InputClearButton>
        )}
      </S.SearchBarWrapper>

      {cardFilter && (
        <S.SearchResult className="lb-h2-semibold">
          <span>{cardFilter}</span>으로 검색한 결과입니다.
        </S.SearchResult>
      )}
    </>
  );
};

export default LinkSearchBar;
