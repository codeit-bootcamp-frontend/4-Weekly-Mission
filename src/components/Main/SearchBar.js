import React, { useState } from 'react';
import './SearchBar.css';
import searchIcon from '../../assets/images/search-icon.svg';

function SearchBar() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="search-bar position-relative width-full">
      <input
        className="search-bar-input background-light text-color-text width-full"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="링크를 검색해 보세요."
      />
      <img className="search-bar-icon position-absolute" src={searchIcon} alt="searchIcon"></img>
    </div>
  );
}

export default SearchBar;
