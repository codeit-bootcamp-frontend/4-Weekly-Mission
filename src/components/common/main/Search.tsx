import React, { FormEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import filterByKeyword, { Link, UserLinksData } from 'utils/filterByKeyword';

interface SearchProps {
  links: (UserLinksData | Link)[];
}

const Search: React.FC<SearchProps> = ({ links }) => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get('keyword'),
  );
  const filteredLinks = filterByKeyword(links || [], searchTerm);
  const hasFilteredLinks = filteredLinks.length !== 0;
  console.log(filteredLinks);
  useEffect(() => {
    setSearchTerm(searchParams.get('keyword'));
  }, [searchParams]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <SearchBar onSubmit={handleSubmit}>
      <img src="/images/icons/search.svg" alt="Search Icon" />
      <SearchInput
        type="text"
        placeholder="링크를 검색해 보세요."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <>
          <SearchResult>
            <span>{searchTerm}</span>으로 검색한 결과입니다.
          </SearchResult>
          {!hasFilteredLinks && <NoLink>검색 결과가 없습니다 😢</NoLink>}
        </>
      )}
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
const SearchResult = styled.div`
  margin-top: 4rem;
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 3.82rem;
  color: ${({ theme }) => theme.gray60};
  span {
    color: ${({ theme }) => theme.black};
  }
  @media (max-width: 767px) {
    margin-top: 3.2rem;
    font-size: 2.4rem;
    line-height: 2.86rem;
  }
`;
const NoLink = styled.div`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Search;
