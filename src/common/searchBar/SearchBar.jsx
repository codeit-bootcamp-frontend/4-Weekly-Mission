import "./SearchBar.css";
import searchBarImg from "../../assets/search-icon.png";

function SearchBar() {
  return (
    <div className="SearchBar">
      <div className="container">
        <img src={searchBarImg} alt="search" />
        <span className="SearchText">링크를 검색해 보세요.</span>
      </div>
    </div>
  );
}

export default SearchBar;
