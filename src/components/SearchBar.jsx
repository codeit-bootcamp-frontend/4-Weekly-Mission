import Search from "../images/Search.svg";
import "./css/Main.css";

function SearchBar() {
  return (
    <div className="searchbar-container">
      <div className="input-container">
        <img src={Search} alt="Search" />
        <input type="text" placeholder="링크를 검색해 보세요" />
      </div>
    </div>
  );
}

export default SearchBar;
