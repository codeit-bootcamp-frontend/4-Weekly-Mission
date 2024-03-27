import searchIcon from '../../assets/icon-search.svg';
import closeIcon from '../../assets/icon-close-white.svg';
import './SearchBar.css';
import { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSeachText] = useState('');

  const deleteSeachText = () => {
    setSeachText('');
  };

  return (
    <form className="search_link">
      <img src={searchIcon} alt="search" />
      <input
        type="text"
        className="input_box"
        placeholder="링크를 검색해 보세요."
        value={searchText}
        onChange={(e) => setSeachText(e.target.value)}
      />
      {searchText && (
        <img src={closeIcon} alt="close" onClick={deleteSeachText} />
      )}
    </form>
  );
};

export default SearchBar;
