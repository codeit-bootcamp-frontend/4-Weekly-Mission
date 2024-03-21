import { useRef } from "react";
import * as S from "./LinkSearchBar.style";

// Type
interface LinkSearchBarPropType {
  cardFilter: string;
  setCardFilter: (arg: string) => void;
}

/**
 *
 * @param {string } cardFilter 설정된 카드 필터를 받아 현재 검색된 사항에 대하여 ui에 표시해주기 위한 요소
 * @param {function} setCardFilter submit할 때, 검색 결과 또한 재설정하기 위한 setState 함수 요소
 * @returns 사용자에게서 input을 받아 해당 속성에 맞는 card를 필터링하기 위한 컴포넌트입니다.
 */
export default function LinkSearchBar({
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
}
