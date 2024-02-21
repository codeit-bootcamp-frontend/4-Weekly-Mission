import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.SearchBar}>
      <i className="icon-Search"></i>
      <input
        className={styles.SearchInput}
        type="text"
        name="search"
        placeholder="링크를 검색해 보세요."
      />
    </div>
  );
};

export default SearchBar;
