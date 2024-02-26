import searchIcon from "../img/searchIcon.png";
import styled from "styled-components";

const SearchBox = styled.div`
  display: flex;
  padding: 0 1.5rem;
  border-radius: 10px;
  background: #f5f5f5;
  gap: 1.6rem;
  align-items: center;
  user-select: none;
  max-width: 106rem;
  width: 100%;
  margin: auto;

  .search-form {
    width: 100%;
    height: 5.4rem;
  }

  .search-form > input {
    outline: none;
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding: 5px 0;
    font-size: 1.6rem;
  }
`;

function SearchInput() {
  return (
    <SearchBox>
      <span className="search-icon">
        <img src={searchIcon} alt="검색 아이콘" />
      </span>
      <form className="search-form">
        <input type="text" placeholder="링크를 검색해 보세요." />
      </form>
    </SearchBox>
  );
}

export default SearchInput;
