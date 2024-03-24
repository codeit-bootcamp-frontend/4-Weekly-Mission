import '../../assets/styles/SearchBar.css';
import searchIcon from '../../assets/images/search.svg';
import cancelIcon from '../../assets/icons/cancel.svg';
import React, { ChangeEvent } from 'react';

interface SearchBarProps {
  value: string;
  onInputChange: (value: string) => void;
}

const SearchBar = ({ value, onInputChange }: SearchBarProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };
  const handleCancelInput = () => {
    onInputChange('');
  };
  return (
    <div className="search-bar-container">
      <div className="search-form">
        <img id="search-icon" src={searchIcon} alt="search-icon" />
        <input
          className="search-bar"
          type="text"
          name="search-bar"
          placeholder="링크를 검색해 보세요."
          value={value}
          onChange={handleInputChange}
        />
        {value && (
          <img
            id="cancel-icon"
            src={cancelIcon}
            onClick={handleCancelInput}
            alt="cancel-icon"
          />
        )}
      </div>
    </div>
  );
};
export default SearchBar;
