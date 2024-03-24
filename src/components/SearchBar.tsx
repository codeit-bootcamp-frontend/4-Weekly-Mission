import { ChangeEvent } from "react";

import Search from "../images/Search.svg";
import Close from "../images/close.svg";
import styles from "./SearchBar.module.css";

interface Props {
  searchVal: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClickClose: () => void;
}

function SearchBar({ searchVal, onChange, handleClickClose }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <img src={Search} alt="Search" />
        <input
          value={searchVal}
          onChange={onChange}
          className={styles.input}
          type="text"
          placeholder="링크를 검색해 보세요"
        />
      </div>
      <img
        className={styles.close}
        onClick={handleClickClose}
        src={Close}
        alt="Close"
      />
    </div>
  );
}

export default SearchBar;
