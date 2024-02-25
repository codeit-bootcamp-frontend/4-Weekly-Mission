/** @jsxImportSource @emotion/react */
import { useState } from "react";
import styles from "./styles";
import searchImg from "../../assets/Search.png";
import "../../styles/common.css";

const SearchingBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSearch(keyword);
  };

  return (
    <form onSubmit={handleSubmit} css={styles.form}>
      <img src={searchImg} css={styles.image} />
      <input
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="링크를 검색해 보세요"
        css={styles.input}
      />
    </form>
  );
};

export default SearchingBar;
