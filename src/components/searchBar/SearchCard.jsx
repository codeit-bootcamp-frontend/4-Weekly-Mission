import search from "../../imgs/search.svg";
import "./SearchCard.css";

function SearchCard(props) {
  return (
    <article className="searchArticle">
      <form className="searchBox">
        <label htmlFor="link">
          <img className="sarchBox--img" src={search} alt="searchimg" />
        </label>
        <input
          className="searchBox--text"
          id="link"
          type="text"
          placeholder="링크를 검색해 보세요."
        />
      </form>
    </article>
  );
}

export default SearchCard;
