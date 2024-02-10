import React from 'react';
import styled from 'styled-components';

const Search = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <SearchBar onSubmit={handleSubmit}>
      <img src="/images/icons/search.svg" />
      <SearchInput type="text" placeholder="링크를 검색해 보세요." />
    </SearchBar>
  );
};

const SearchBar = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 1060px;
  height: 54px;
  padding: 15px 16px;
  border-radius: 10px;
  background-color: #f5f5f5;
  margin: 40px 0;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  width: 1000px;
  background-color: #f5f5f5;
`;
export default Search;
