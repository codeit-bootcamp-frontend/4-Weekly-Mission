/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import searchImg from "../../../assets/Search.png";
import "../../../styles/common.css";

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
    <form onSubmit={handleSubmit} css={formCss}>
      <img src={searchImg} css={imageCss} />
      <input
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="링크를 검색해 보세요"
        css={inputCss}
      />
    </form>
  );
};

export default SearchingBar;

const formCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const imageCss = css`
  position: relative;
  top: 16px;
  left: 32px;
  width: 16px;
  height: 16px;
`;
const inputCss = css`
  display: inline-block;
  border: none;
  outline: none;
  height: 54px;
  width: min(100% - 64px, 1060px);
  background: var(--Grey-Light);
  border-radius: 12px;
  padding: 16px 44px;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
