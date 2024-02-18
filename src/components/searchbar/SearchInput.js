import "./SearchInput.css";
import searchImg from "../../assets/Search.svg";

function SearchInput() {
  return (
    <from className="searchBar">
      <label className="searchBarImg">
        <img src={searchImg} alt="검색바 돋보기 사진" />
      </label>
      <input
        className="searchInput"
        type="text"
        name="search"
        placeholder="링크를 검색해 보세요."
      />
    </from>
  );
}

export default SearchInput;
