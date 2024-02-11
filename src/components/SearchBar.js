import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="searchBar">
      <img src="images/search.svg" alt="search" />
      <input
        className="search-input"
        placeholder="링크를 검색해 보세요."
      ></input>
    </div>
  );
}
