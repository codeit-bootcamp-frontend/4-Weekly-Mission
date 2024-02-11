import React from 'react';
import './styles/searchBar.css';
import searchIcon from '../images/search.svg';

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-bar">
        <img className="search-bar-icon" src={searchIcon} alt="search icon" />
        <input className="search-bar-input" type="text" placeholder="링크를 검색해 보세요."></input>
      </div>
    </div>
  );
};

export default SearchBar;
