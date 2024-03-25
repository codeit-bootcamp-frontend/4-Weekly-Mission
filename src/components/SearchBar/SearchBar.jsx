import "./SearchBar.css";
const SEARCH_ICON = "images/search.svg";

const SearchBar = ({ searchWord, setSearchWord }) => {
  return (
    <div className="SearchBar">
      <input
        className="SearchBarInput"
        type="search"
        placeholder="링크를 검색해 보세요."
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <img src={SEARCH_ICON} alt="검색창인 것을 알려주는 돋보기 아이콘" className="SearchBarIcon" />
      {searchWord && (
        <button className="SearchBarClearButton" onClick={() => setSearchWord("")}>
          X
        </button>
      )}
    </div>
  );
};

export default SearchBar;
