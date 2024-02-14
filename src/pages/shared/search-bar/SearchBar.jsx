import "./SearchBar.css";
import searchImg from "../../../assets/shared/Search.svg";

function SearchBar() {
  return (
    <div className="search-container">
      <img className="icon" src={searchImg} alt="돋보기 아이콘" />
      <input
        className="search-bar"
        type="text"
        placeholder="링크를 검색해 보세요."
      ></input>
    </div>
  );
}

export default SearchBar;
