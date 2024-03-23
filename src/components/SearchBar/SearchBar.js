import searchIcon from '../../images/Search.svg';

function SearchBar() {
  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <img src={searchIcon} alt="검색" />
      <input type="text" placeholder="링크를 검색해 보세요." />
    </form>
  );
}

export default SearchBar;
