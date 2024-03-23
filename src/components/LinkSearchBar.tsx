import { useState } from 'react';
import searchIcon from '../assets/searchIcon.svg';
import searchClearIcon from '../assets/searchClearIcon.svg';
import '../styles/linkSearchBar.css';

function LinkSearchBar() {
  const [inputValue, setInputValue] = useState<string>();
  const placeholder = '링크를 검색해 보세요.';

  const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <div className="cards-container__search">
      <img className="search--icon" src={searchIcon} alt="searchIcon" />
      <input
        className="search--input"
        placeholder={placeholder}
        onChange={handleInputValueChange}
      />
      {inputValue && (
        <img
          src={searchClearIcon}
          alt="search-clear"
          className="search-clear--icon"
        />
      )}
    </div>
  );
}
export default LinkSearchBar;
