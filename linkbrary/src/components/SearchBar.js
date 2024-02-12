import "../styles/SearchBar.css";
import SEARCH from "../icons/search.svg";

function SearchBar() {
  return (
    <search className="search-bar">
      <img src={SEARCH} alt="돋보기 아이콘" className="icon-search" />
      <input
        type="text"
        className="input-search"
        placeholder="링크를 검색해 보세요."
      />
    </search>
  );
}

export default SearchBar;
