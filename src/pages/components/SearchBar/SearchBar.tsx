import { ChangeEvent, useState } from "react";
import "./SearchBar.css";

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputEmpty = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputClean = () => {
    setInputValue("");
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
