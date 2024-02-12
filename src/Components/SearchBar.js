import "./css/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <img
        src="icons/search_icon.svg"
        alt="search-icon"
        className="search-icon"
      />
      <input
        type="text"
        placeholder="링크를 검색해 보세요."
        className="search-bar-input"
      />
    </div>
  );
};

export default SearchBar;
