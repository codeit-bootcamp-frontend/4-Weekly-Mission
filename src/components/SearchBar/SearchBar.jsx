import "./SearchBar.css";
const SEARCH_ICON = "images/search.svg";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input className="SearchBarInput" type="search" placeholder="링크를 검색해 보세요." />
      <img src={SEARCH_ICON} alt="검색창인 것을 알려주는 돋보기 아이콘" className="SearchBarIcon" />
    </div>
  );
};

export default SearchBar;
