import "./SearchBar.css";
import searchIcon from "../assets/searchIcon.svg";

function SearchBar() {
  return (
    <div className="search-container">
      <form className="search-form">
        <label htmlFor="searchInput" className="hiddenLabel">
          링크를 검색해 보세요.
        </label>
        <img src={searchIcon} alt={searchIcon} />
        <input
          type="text"
          id="searchInput"
          placeholder="링크를 검색해 보세요."
          className="search-input"
        />
      </form>
    </div>
  );
}

export default SearchBar;
