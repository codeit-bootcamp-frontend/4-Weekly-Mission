import "./SearchBar.css";
import searchbarImg from "../../assets/Search.png";

function SearchBar() {
  return (
    <div className="SearchBar">
      <div>
        <img src={searchbarImg}></img>
        <span className="SearchText">링크를 검색해 보세요.</span>
      </div>
    </div>
  );
}

export default SearchBar;
