import { KeyboardEvent, ChangeEvent, useState } from "react";
import "./SearchBar.css";
import { useRecoilState } from "recoil";
import { searchState } from "recoil/SearchKeyWord";

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
    <div className="SearchBar">
      <div className="SearchBar-icon" />
      <input
        value={inputValue}
        className="SearchBar-input"
        type="search"
        placeholder="링크를 검색해 보세요."
        onChange={handleInputEmpty}
        onKeyDown={handleSearchCard}
      />
      {inputValue && (
        <button
          type="button"
          className="delete-button"
          onClick={handleInputClean}
        >
          X
        </button>
      )}
    </div>
  );
};
