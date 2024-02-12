import searchIcon from "../../assets/images/Search.png";
import "./SearchBar.css";

function SearchBar({ className }) {
  return (
    <div className={`SearchBar ${className}`}>
      <input
        className="SearchBar-input"
        type="text"
        placeholder="링크를 검색해 보세요."
      />
      <img className="SearchBar-img" src={searchIcon} alt="searchBar" />
    </div>
  );
}

export default SearchBar;
