import "../../assets/styles/SearchBar.css";
import searchIcon from "../../assets/images/search.svg";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <form className="search-form">
        <img id="search-icon" src={searchIcon} alt="search-icon" />
        <input
          className="search-bar"
          type="text"
          name="search-bar"
          placeholder="링크를 검색해 보세요."
        />
      </form>
    </div>
  );
};
export default SearchBar;
