import searchIcon from '../assets/Search.png';
import style from '../styles/SearchBar.module.css';

function SearchBar() {
  return (
    <div id={style.searchBar}>
      <input type="text" id={style.searchLink} placeholder="링크를 검색해 보세요." />
      <img className={style.searchIcon} src={searchIcon} alt="icon" />
    </div>
  );
}

export default SearchBar;
