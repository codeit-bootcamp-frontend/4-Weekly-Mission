import React, { useState, ChangeEvent, FormEvent } from 'react';
import searchIcon from '../../../images/Search.svg';
import '../../../style/searchbar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar-box">
      <form className="search-bar" onSubmit={handleSearch}>
        <img src={searchIcon} alt="Search" />
        <input
          type="text"
          placeholder="링크를 검색해 보세요."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
