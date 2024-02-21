import '../styles/SearchBar.css';
import iconSearch from '../assets/icons/search.svg';

const SearchBar = () => {

  return (
    <div className="searchbar">
      <img className="searchbar-icon" src={iconSearch} alt="링크를 검색하기." />
      <input className="searchbar-input" type="text" placeholder="링크를 검색해 보세요."></input>
    </div>
  );
}

export default SearchBar;