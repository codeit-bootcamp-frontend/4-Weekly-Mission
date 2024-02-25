import searchIcon from '../../assets/icon-search.svg';

const SearchBar = () => {
  return (
    <form className="search_link">
      <img src={searchIcon} alt="search" />
      <input
        type="text"
        className="input_box"
        placeholder="링크를 검색해 보세요."
      />
    </form>
  );
};

export default SearchBar;
