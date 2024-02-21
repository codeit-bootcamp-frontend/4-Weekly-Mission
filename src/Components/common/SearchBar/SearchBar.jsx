import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBar_container}>
      <img
        className={styles.searchBar_icon}
        src="Icons/Search.svg"
        alt="Search"
      />
      <input
        type="text"
        placeholder="링크를 검색해 보세요."
        className={styles.searchBar_input}
      />
    </div>
  );
}

export default SearchBar;
