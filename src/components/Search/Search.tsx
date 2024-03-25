import React, { ChangeEvent, useState } from "react";
import searchIcon from "../../image/Search.svg";
import "./Search.css";
import closeBtn from "../../image/close.svg";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchText("");
  };

  return (
    <form className="searchBar">
      <img src={searchIcon} alt="Search" className="searchIcon" />
      <input
        type="text"
        placeholder="링크를 검색해 보세요"
        className="searchInput"
        value={searchText}
        onChange={handleInputChange}
      />
      <img
        src={closeBtn}
        alt="close button"
        className="closeIcon"
        onClick={handleClearSearch}
      />
    </form>
  );
};

export default Search;
