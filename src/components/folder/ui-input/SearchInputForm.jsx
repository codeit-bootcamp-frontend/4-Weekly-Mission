import React from "react";
import styled from "styled-components";

const Image = styled.img`
  position: absolute;
  left: 20px;
`;
const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const SearchInputFormContainer = styled.div`
  position: relative;
  width: 100%;

  ${Image} {
    top: 34%;
  }

  ${Input} {
    padding: 15px 16px 15px 44px;

    background-color: #f5f5f5;

    border: none;
    border-radius: 10px;
  }
`;

const SearchInputForm = () => {
  return (
    <SearchInputFormContainer>
      <Image src="/icons/search_icon.svg" alt="search icon" />
      <Input type="text" placeholder="링크를 검색해 보세요." />
    </SearchInputFormContainer>
  );
};

export default SearchInputForm;
