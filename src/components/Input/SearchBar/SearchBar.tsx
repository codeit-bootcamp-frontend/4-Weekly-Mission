import { ChangeEvent } from "react";
import styles from "./searchbar.module.css";
import searchIcon from "assets/images/ic_search.svg";

interface SearchBarProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className={styles.container}>
      <img src={searchIcon} className={styles.icon} alt="돋보기 아이콘" />
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
