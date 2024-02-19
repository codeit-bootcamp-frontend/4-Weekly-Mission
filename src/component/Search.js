import searchIcon from "../image/Search.svg";
function Search() {
  const handleSearch = (e) => {
    console.log(e.value);
  };

  return (
    <form className="searchBar" onSubmit={handleSearch}>
      <img src={searchIcon} alt="SearchIcon" />
      <input type="text" placeholder="링크를 검색해 보세요." />
    </form>
  );
}

export default Search;
