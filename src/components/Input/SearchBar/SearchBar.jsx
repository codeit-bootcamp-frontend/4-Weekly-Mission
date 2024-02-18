import styles from "./searchbar.module.css";
import searchIcon from "assets/images/ic_search.svg";

function SearchBar({ value, onChange }) {
  return (
    <div className={styles.container}>
      <img src={searchIcon} className={styles.icon} />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="링크를 검색해 보세요."
        className={styles.input}
      />
    </div>
  );
}

export default SearchBar;
