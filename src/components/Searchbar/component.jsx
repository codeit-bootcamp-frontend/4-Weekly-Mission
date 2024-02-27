import "./style.css";

export default function Searchbar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <img className="search-button" src="images/search.svg" alt="search"></img>
      <input
        className="input-box"
        type="text"
        placeholder="링크를 검색해 보세요."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      {search && (
        <img
          className="clear-button"
          src="images/clear.svg"
          alt="clear"
          onClick={() => setSearch("")}
        ></img>
      )}
    </div>
  );
}
