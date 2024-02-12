import searchImg from "../../assets/search.svg";
import "../../style/landing.css";

const SEARCH_IMAGE = searchImg;

export function SearchBar() {
  return (
    <div>
      {/* <img src={searchImg} alt="searchImg" /> */}
      <input
        className="searchBar"
        type="text"
        enterKeyHint="링크를 검색해 보세요"
      />
    </div>
  );
}

export default SearchBar;
