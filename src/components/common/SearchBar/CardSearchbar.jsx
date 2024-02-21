import {
  SearchBar,
  SearchInput,
  VisuallyHiddenLabel,
} from './cardSearchbarStyle';

const CardSearchbar = () => {
  return (
    <SearchBar role="search">
      <VisuallyHiddenLabel htmlFor="search-input">
        링크 검색
      </VisuallyHiddenLabel>
      <SearchInput
        id="search-input"
        type="text"
        placeholder="링크를 검색해 보세요."
      />
    </SearchBar>
  );
};

export default CardSearchbar;
