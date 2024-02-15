import "../assets/styles/SearchBar.css";
import searchIcon from "../assets/images/search.svg";

const SearchBar = () => {
  return (
    <div className="search_bar_container">
      <form className="search_form">
        <img id="search_icon" src={searchIcon} />
        <input
          className="search_bar"
          type="text"
          name="search_bar"
          placeholder="링크를 검색해 보세요."
        />
      </form>
    </div>
  );
};
export default SearchBar;