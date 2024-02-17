import styles from '../css/SearchBar.module.css'

function SearchBar() {
  return(
    <form>
      <div className={styles.searchIcon}></div>
      <input name="search" placeholder='링크를 검색해 보세요.' />
    </form>
  );
}

export default SearchBar;
