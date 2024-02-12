import searchIcon from '../assets/Search.png';
import '../styles/SearchBar.css';

function SearchBar() {
  return (
    <div id="search-bar">
      <input type="text" id="search-link" placeholder="링크를 검색해 보세요." />
      <img className="search-icon" src={searchIcon} alt="icon" />
    </div>
  );
}

export default SearchBar;
