import '../styles/SearchBar.css';
import iconSearch from '../assets/icons/search.svg';

function SearchBar() {

  return (
    <div className="searchbar">
      <div className="searchbar-content">
        <img className="searchbar-icon" src={iconSearch} alt="링크를 검색하기." />
        <input className="searchbar-input" type="text" placeholder="링크를 검색해 보세요."></input>
      </div>
    </div>
  );
}

export default SearchBar;