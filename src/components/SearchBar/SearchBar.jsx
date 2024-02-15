import * as S from './SearchBar.styles';

const SearchBar = () => {
  return (
    <S.SearchBarDiv>
      <S.SearchBarFaSearch />
      <S.SearchBarInput placeholder='링크를 검색해 보세요' />
    </S.SearchBarDiv>
  );
};

export default SearchBar;
