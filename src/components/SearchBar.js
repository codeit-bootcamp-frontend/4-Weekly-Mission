import styles from "./css/SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.search_bar}>
      <img
        src="icons/search_icon.svg"
        alt="search icon"
        className={styles.search_icon}
      />
      <input
        type="text"
        placeholder="링크를 검색해 보세요."
        className={styles.search_bar_input}
      />
    </div>
  );
};

export default SearchBar;
