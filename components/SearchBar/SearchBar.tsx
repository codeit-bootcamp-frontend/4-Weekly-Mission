import { KeyboardEvent, ChangeEvent, useState } from "react";
import { searchState } from "../../recoil/SearchKeyWord";
import * as S from "./SearchBarStyled";
import { useRecoilState } from "recoil";
import searchIcon from "@public/images/search.svg";
import Image from "next/image";

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
      <S.SearchBarIconContainer>
        <Image src={searchIcon} alt="검색 아이콘" />
      </S.SearchBarIconContainer>
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
