import { SearchBarIcon, SearchBarInput, StyledSearchBar } from "./SearchBarCss";
import { SEARCH_IMAGE } from "./constant";

export const SearchBar = () => {
  return (
    <StyledSearchBar>
      <SearchBarInput type="search" placeholder="링크를 검색해 보세요." />
      <SearchBarIcon
        src={SEARCH_IMAGE}
        alt="검색창인 것을 알려주는 돋보기 아이콘"
      />
    </StyledSearchBar>
  );
};
