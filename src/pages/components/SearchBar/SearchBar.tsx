import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="SearchBar">
      <div
        className="SearchBar-icon"
        alt="검색창인 것을 알려주는 돋보기 아이콘"
      />
      <input
        className="SearchBar-input"
        type="search"
        placeholder="링크를 검색해 보세요."
      />
    </div>
  );
};
