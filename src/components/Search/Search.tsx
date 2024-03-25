import React from "react";
import searchIcon from "../../image/Search.svg";
import "./Search.css";

const Search = () => {
  return (
    <form className="search-bar">
      <img src={searchIcon} alt="Search" className="search-icon" />
      <input
        type="text"
        placeholder="링크를 검색해 보세요"
        className="search-input"
      />
    </form>
  );
};

export default Search;
