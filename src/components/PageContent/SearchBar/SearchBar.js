import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input
        className="SearchBar-input"
        type="search"
        placeholder="링크를 검색해 보세요."
      />
      <img
        className="SearchBar-icon"
        src="image/icon/search.svg"
        alt="돋보기 아이콘"
      />
    </div>
  );
};

export default SearchBar;
