import React from "react";
import styled from "styled-components";
import searchIcon from "../../assets/svg/search.svg";

const Container = styled.div`
  margin: 40px 0;
  display: flex;
  padding: 0px 16px;
  border-radius: 10px;
  background-color: #f5f5f5;

  input {
    height: 54px;
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 0 16px;
    background-color: #f5f5f5;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 767px) {
    input {
      height: 43px;
      padding: 0 16px;
      font-size: 14px;
    }
  }
`;

const SearchBar = () => {
  return (
    <Container>
      <img src={searchIcon} />
      <input type="text" placeholder="링크를 검색해 보세요" />
    </Container>
  );
};

export default SearchBar;
