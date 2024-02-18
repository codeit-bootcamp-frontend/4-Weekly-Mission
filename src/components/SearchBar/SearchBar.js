import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <i className="icon-Search"></i>
      <input
        className="SearchInput"
        type="text"
        name="search"
        placeholder="링크를 검색해 보세요."
      />
    </div>
  );
};

export default SearchBar;
