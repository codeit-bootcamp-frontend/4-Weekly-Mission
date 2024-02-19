import React from "react";
import styled from "styled-components";
import searchImg from "../../assets/images/searchImg.svg";

const SearchBar = () => {
  return (
    <S.SearchBarContainer>
      <img src={searchImg} alt="searchImg" />
      <S.SearchInput type="text" />
    </S.SearchBarContainer>
  );
};

export default SearchBar;

const S = {
  SearchBarContainer: styled.div`
    display: flex;
    width: 100%;
    padding: 13px 16px;
    align-items: flex-start;
    border-radius: 10px;
    background: #f5f5f5;
  `,
  SearchInput: styled.input`
    border: none;
    outline: none;
    width: 100%;
    margin-left: 10px;
    font-size: 16px;
    line-height: 19px;
    color: #4f4f4f;
    background: #f5f5f5;
  `,
};
