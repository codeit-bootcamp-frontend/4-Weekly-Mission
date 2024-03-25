import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import closeIcon from 'assets/images/close-icon.png';

interface SearchProps {
  searchTerm: string;
  setSearchTerm: Function;
  url: string;
}

const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm, url }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigateToKeyword(searchTerm);
  };
  const navigate = useNavigate();

  const navigateToKeyword = (input: string) => {
    const keyword = input?.replace(/(\s*)/g, '');
    if (keyword === '') return;

    navigate({
      pathname: url,
      search: `?keyword=${keyword}`,
    });
  };
  const clearInput = () => {
    if (searchTerm) {
      setSearchTerm('');
      navigate({
        pathname: url,
        search: '',
      });
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit}>
        <FlexContainer>
          <img src="/images/icons/search.svg" alt="Search Icon" />
          <SearchInput
            type="text"
            placeholder="링크를 검색해 보세요."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </FlexContainer>
        <CloseIcon src={closeIcon} alt="검색 결과 닫기" onClick={clearInput} />
      </SearchBar>
      {searchTerm && (
        <>
          <SearchResult>
            <span>{searchTerm}</span>으로 검색한 결과입니다.
          </SearchResult>
        </>
      )}
    </>
  );
};

const SearchBar = styled.form`
  display: flex;
  justify-content: space-between;
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
const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
const CloseIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;
const SearchResult = styled.div`
  margin-bottom: 4rem;
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 3.82rem;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  color: ${({ theme }) => theme.gray60};
  span {
    color: ${({ theme }) => theme.black};
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    width: calc(100% - 6.4rem);
  }
  @media (max-width: 767px) {
    width: calc(100% - 6.4rem);
    margin-top: 3.2rem;
    font-size: 2.4rem;
    line-height: 2.86rem;
  }
`;
export default Search;
