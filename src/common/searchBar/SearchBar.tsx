import React from "react";
import "./SearchBar.css";
import searchBarImg from "../../assets/search-icon.png";

function SearchBar() {
  return (
    <div className="SearchBar">
      <img src={searchBarImg} alt="search" />
      <input className="text_input" placeholder="링크를 검색해보세요" />
    </div>
  );
}

export default SearchBar;
