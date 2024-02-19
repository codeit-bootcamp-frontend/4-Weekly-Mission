import search from "../images/Search.png";
import "./SearchBar.css";

export function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search">
        <img src={search} alt="search-icon" />
        <div className="search-text">링크를 검색해 보세요</div>
      </div>
    </div>
  );
}
