import * as S from "./SearchBar.style";

const SearchBar = () => {
  return (
    <S.Container>
      <img
        className="icon"
        src="/assets/shared/search.svg"
        alt="돋보기 아이콘"
      />
      <input
        className="search-bar"
        type="text"
        placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;링크를 검색해 보세요."
      />
    </S.Container>
  );
};

export default SearchBar;
