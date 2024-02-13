import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="SearchBar">
      <input
        className="SearchBar-input"
        type="search"
        placeholder="링크를 검색해 보세요."
      />
      <img
        src="./images/search.svg"
        alt="검색창인 것을 알려주는 돋보기 아이콘"
        className="SearchBar-icon"
      />
    </div>
  );
}

export default SearchBar;
