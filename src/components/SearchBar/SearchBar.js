import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="searchBar-icon"></div>
      <input
        className="searchBar-input"
        type="search"
        placeholder="링크를 검색해 보세요."
      />
    </div>
  );
};

export default SearchBar;
