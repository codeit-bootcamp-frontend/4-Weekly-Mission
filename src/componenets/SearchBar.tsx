import searchBar from "../images/searchBar.svg";
import "./SearchBar.css";
import close from "../images/_close.png";
import React, { ChangeEvent, useState } from "react";
import { setInputData } from "../pages/Folder";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const inputData = React.useContext(setInputData);

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
    inputData(e.currentTarget.value);
  };

  const handleInputReset = () => {
    setInputValue("");
    inputData("");
  };

  return (
    <form className="SearchBar-Form">
      <img src={searchBar} alt="링크 검색" />
      <input
        placeholder="링크를 검색해 보세요."
        value={inputValue}
        onChange={handleInputValueChange}
      />
      <div className="close-div" onClick={handleInputReset}>
        <img src={close} alt="닫기" />
      </div>
    </form>
  );
}

export default SearchBar;
