import React from "react";
import "./css/SearchBar.css";

function SearchBar() {
  return (
    <div className="searchBar_container">
      <img
        className="searchBar_icon"
        src="Icons/Search.svg"
        alt="Search"
      />
      <input
        type="text"
        placeholder="링크를 검색해 보세요."
        className="searchBar_input"
      />
    </div>
  );
}

export default SearchBar;
