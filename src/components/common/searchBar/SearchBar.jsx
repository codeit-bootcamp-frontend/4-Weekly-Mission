import React from "react";
import searchIcon from "../../../assets/svg/search.svg";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <img src={searchIcon} />
      <input type="text" placeholder="링크를 검색해 보세요" />
    </div>
  );
};

export default SearchBar;
