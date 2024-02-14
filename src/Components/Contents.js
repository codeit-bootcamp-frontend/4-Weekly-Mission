import SearchIcon from "../img/Search.svg";
import Card from "./Card";

const Contents = () => {
  return (
    <section className="Contents">
      <form>
        <label htmlFor="searchInput">
          <img className="SearchIcon" src={SearchIcon} alt="검색 아이콘" />
        </label>
        <input
          id="searchInput"
          type="text"
          placeholder="링크를 검색해 보세요"
        />
      </form>
      <Card />
    </section>
  );
};

export default Contents;
