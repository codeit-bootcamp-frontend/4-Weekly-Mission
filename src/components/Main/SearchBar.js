import React, { useState } from 'react';
import './SearchBar.css';
import searchIcon from '../../assets/images/search-icon.svg';

function SearchBar() {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search-bar position-relative width-full">
      <input
        className="search-bar-input background-light text-color-text width-full"
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="링크를 검색해 보세요."
      />
      <img className="search-bar-icon position-absolute" src={searchIcon} alt="searchIcon" />
    </div>
  );
}

export default SearchBar;
