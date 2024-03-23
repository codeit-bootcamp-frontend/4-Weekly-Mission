import { ChangeEvent, MouseEvent, useState } from "react";
import styles from "./searchbar.module.css";
import searchIcon from "assets/images/ic_search.svg";
import closeIcon from "assets/images/ic_close.png";

interface SearchBarProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

function SearchBar({ value, onChange, onClick }: SearchBarProps) {
  return (
    <div className={styles.container}>
      <img src={searchIcon} className={styles.searchIcon} alt="돋보기 아이콘" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="링크를 검색해 보세요."
        className={styles.input}
      />
      <button type="button" onClick={onClick}>
        <img src={closeIcon} className={styles.closeIcon} alt="닫기 아이콘" />
      </button>
    </div>
  );
}

export default SearchBar;
