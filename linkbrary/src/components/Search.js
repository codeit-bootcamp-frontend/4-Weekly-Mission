import { styled } from "styled-components";
import "../styles/Search.css";
import searchImgSrc from "../assets/search.svg";

function Search() {
  <SearchBar>
    <img src={searchImgSrc} alt="돋보기 아이콘" className="icon-search" />
    <input
      type="text"
      className="input-search"
      placeholder="링크를 검색해 보세요."
    />
  </SearchBar>;
}

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 4rem;
  padding: 1.5rem 1.6rem;
  width: 100%;
  max-width: 106rem;
  border-radius: 1rem;
  background-color: var(--gray10);
`;
export default Search;
