import searchBar from "../images/searchBar.svg";
import "./SearchBar.css";

function SearchBar() {
  return (
    <form className="SearchBar-Form">
      <img src={searchBar} alt="링크 검색" />
      <input placeholder="링크를 검색해 보세요." />
    </form>
  );
}

export default SearchBar;
