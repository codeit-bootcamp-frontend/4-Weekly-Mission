import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="SearchBar">
      <div className="SearchBar-icon" />
      <input
        className="SearchBar-input"
        type="search"
        placeholder="링크를 검색해 보세요."
      />
    </div>
  );
};
