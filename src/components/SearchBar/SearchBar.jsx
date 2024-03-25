import "./SearchBar.css";
const SEARCH_ICON = "images/search.svg";
const CLEAR_ICON = "images/close.png";

const SearchBar = ({ searchWord, setSearchWord }) => {
  return (
    <>
      <div className="SearchBar">
        <input
          className="SearchBarInput"
          type="search"
          placeholder="링크를 검색해 보세요."
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <img
          src={SEARCH_ICON}
          alt="검색창인 것을 알려주는 돋보기 아이콘"
          className="SearchBarIcon"
        />
        {searchWord && (
          <button onClick={() => setSearchWord("")}>
            <img src={CLEAR_ICON} alt="clear" className="SearchBarClearButton" />
          </button>
        )}
      </div>
      {searchWord && (
        <h2 className="SearchResultText">
          <span className="SearchWord">{searchWord}</span>(으)로 검색한 결과입니다.
        </h2>
      )}
    </>
  );
};

export default SearchBar;
