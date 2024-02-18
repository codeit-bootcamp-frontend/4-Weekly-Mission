import styled from 'styled-components';
import iconSearch from '../assets/search.svg';

const SearchArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 4rem;
  padding: 1.5rem 1.6rem;
  width: 100%;
  max-width: 106rem;
  border-radius: 1rem;
  background-color: var(--color-gray-100);
  &::before {
    content: '';
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    background-image: url(${iconSearch});
  }
`;

const SearchInput = styled.input`
  width: 100%;
  background-color: inherit;
  line-height: 2.4rem;
  font-size: 1.6rem;
  outline: none;
`;

const SearchBar = () => (
  <SearchArea className="search-bar-group">
    <SearchInput type="text" placeholder="링크를 검색해 보세요" />
  </SearchArea>
);

export default SearchBar;
