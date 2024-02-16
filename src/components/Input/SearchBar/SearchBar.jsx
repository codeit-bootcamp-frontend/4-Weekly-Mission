import React from "react";
import style from "./searchbar.module.css";
import { searchIcon } from "assets";

function SearchBar({ type, value, onChange }) {
  return (
    <div className={style.container}>
      <img src={searchIcon} className={style.icon}/>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder="링크를 검색해 보세요."
        className={style.input} 
      />
    </div>
  );
}

export default SearchBar;
