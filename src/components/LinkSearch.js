import "./LinkSearch.css";
import search from "../images/Search.png";

function LinkSearch() {
  return (
    <div className="link-search-container">
      <img src={search} />
      <input
        className="link-search"
        type="text"
        placeholder="링크를 검색해 보세요."
      />
    </div>
  );
}
export default LinkSearch;
