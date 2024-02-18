import search from "../../imgs/search.svg";
import "./SearchCard.css";

function SearchCard(props) {
  return (
    <article className="searchArticle">
      <div className="searchBox">
        <img className="sarchBox--img" src={search} alt="searchimg" />
        <p className="searchBox--text">링크를 검색해 보세요.</p>
      </div>
    </article>
  );
}

export default SearchCard;
