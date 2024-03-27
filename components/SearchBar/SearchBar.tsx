import { KeyboardEvent, ChangeEvent, useState } from "react";
import { searchState } from "../../recoil/SearchKeyWord";
import * as S from "./SearchBarStyled";
import { useRecoilState } from "recoil";

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchKeyWord, setSearchKeyWord] = useRecoilState(searchState);

  const handleInputEmpty = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputClean = () => {
    setInputValue("");
  };

  const handleSearchCard = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchKeyWord(inputValue);
    }
  };

  return (
    <S.SearchBarContainer>
      <S.SearchBarIcon />
      <S.SearchBarInput
        value={inputValue}
        type="search"
        placeholder="링크를 검색해 보세요."
        onChange={handleInputEmpty}
        onKeyDown={handleSearchCard}
      />
      {inputValue && (
        <S.SearchBarClearButton type="button" onClick={handleInputClean}>
          X
        </S.SearchBarClearButton>
      )}
    </S.SearchBarContainer>
  );
};
