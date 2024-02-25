import searchIcon from '../assets/search-icon.png';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <img className='search-icon' src={searchIcon} alt='search' />
      <input className='search-input' placeholder='링크를 검색해 보세요' />
    </div>
  );
};

export default SearchBar;
