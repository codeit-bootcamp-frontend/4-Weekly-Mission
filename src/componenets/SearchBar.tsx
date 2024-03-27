import searchBar from "../images/searchBar.svg";
import "./SearchBar.css";
import close from "../images/_close.png";
function SearchBar() {
  return (
    <form className="SearchBar-Form">
      <img src={searchBar} alt="링크 검색" />
      <input placeholder="링크를 검색해 보세요." />
      <div className="close-div">
        <img src={close} alt="닫기" />
      </div>
    </form>
  );
}

export default SearchBar;
