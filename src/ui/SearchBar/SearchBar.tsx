import "./SearchBar.css";

interface Prop {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputClear: () => void;
  searchTerm: string;
}

const SearchBar: React.FC<Prop> = ({
  handleInputChange,
  handleInputClear,
  searchTerm,
}) => {
  return (
    <>
      <div className="SearchBar">
        <input
          className="SearchBar-input"
          type="search"
          placeholder="링크를 검색해 보세요."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <img src="images/search.svg" alt="검색" className="lenzIcon" />
        <button onClick={handleInputClear}>
          {!!searchTerm && (
            <img
              src="images/search-clear.svg"
              alt="지우기"
              className="clearIcon"
            />
          )}
        </button>
      </div>
      {!!searchTerm.trim() && (
        <div className="SearchResult">
          <span>"{searchTerm.trim()}"</span>
          <span className="lightText">으로 검색한 결과입니다.</span>
        </div>
      )}
    </>
  );
};

export default SearchBar;
