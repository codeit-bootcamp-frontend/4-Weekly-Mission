import Search from "../images/Search.svg";
// import "./css/Main.css";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <img src={Search} alt="Search" />
        <input
          className={styles.input}
          type="text"
          placeholder="링크를 검색해 보세요"
        />
      </div>
    </div>
  );
}

export default SearchBar;
