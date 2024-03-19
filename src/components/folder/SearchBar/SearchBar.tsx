import { Wrapper, SearchInput, SearchIcon } from './SearchBar.style';

const SearchBar = () => (
  <Wrapper>
    <SearchInput placeholder="링크를 검색해 보세요" />
    <SearchIcon src="/images/Search.svg" alt="검색" width={16} height={16} />
  </Wrapper>
);

export default SearchBar;
