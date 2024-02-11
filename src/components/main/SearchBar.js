import "./SearchBar.css";
import searchBarImg from "../../assets/Search.png";

function SearchBar() {
  return (
    <div className="SearchBar">
      <div>
        <img src={searchBarImg} alt="search"></img>
        <span className="SearchText">링크를 검색해 보세요.</span>
      </div>
    </div>
  );
}

export default SearchBar;
