import "./SearchBar.css";
import searchImg from "../assets/svg/search.svg";

function SearchBar() {
  return (
    <form className="card_search_bar">
      <div className="search">
        <img src={searchImg} alt="돋보기" />
        <input className="search_bar_input" type="text" placeholder="링크를 검색해 보세요."></input>
      </div>
    </form>
  );
}

export default SearchBar;
