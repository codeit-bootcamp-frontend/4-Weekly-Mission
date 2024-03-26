import { styled } from "styled-components";
import "../styles/Search.css";

function Search() {
  return (
    <SearchBar>
      <img
        src="/assets/search.svg"
        alt="돋보기 아이콘"
        className="icon-search"
      />
      <input
        type="text"
        className="input-search"
        placeholder="링크를 검색해 보세요."
      />
    </SearchBar>
  );
}

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 40px auto;
  padding: 1.5rem 1.6rem;
  width: 100%;
  max-width: 106rem;
  border-radius: 1rem;
  background-color: #f5f5f5;

  @media (max-width: 1199px) {
    width: 704px;
  }
  @media (max-width: 767px) {
    width: 325px;
    align-items: flex-start;
    gap: 12px;
    margin: 28px auto 20px;
  }
`;
export default Search;
