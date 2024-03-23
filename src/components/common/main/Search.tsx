import React, { FormEvent } from 'react';
import styled from 'styled-components';

const Search: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <SearchBar onSubmit={handleSubmit}>
      <img src="/images/icons/search.svg" alt="Search Icon" />
      <SearchInput type="text" placeholder="링크를 검색해 보세요." />
    </SearchBar>
  );
};

const SearchBar = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 5.4rem;
  padding: 1.5rem 1.6rem;
  border-radius: 1rem;
  background-color: #f5f5f5;
  margin: 4rem 0;
  @media (min-width: 768px) and (max-width: 1199px) {
    width: calc(100% - 6.4rem);
  }
  @media (min-width: 375px) and (max-width: 767px) {
    width: calc(100% - 6.4rem);
  }
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 1rem;
  width: 100rem;
  background-color: #f5f5f5;
`;
export default Search;
