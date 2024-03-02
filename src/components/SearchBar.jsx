import styled from "styled-components";
import searchIcon from "../assets/SearchIcon.svg";

const SearchBarDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 13px 16px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 10px;
  background: #f5f5f5;
  border: none;

  @media ${(props) => props.theme.tabletS} {
    width: 100%;
    padding: 15px 16px;
  }

  @media ${(props) => props.theme.desktop} {
    width: 1060px;
  }
`;

const SearchBarWrappedDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;

  @media ${(props) => props.theme.tabletS} {
    gap: 10px;
  }
`;

const SearchBarIconImg = styled.img`
  width: 16px;
  height: 16px;
  fill: rgba(0, 0, 0, 0);
`;

const SearchBarInput = styled.input`
  width: 100%;
  color: var(--Text, #666);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  background: #f5f5f5;
  border: none;

  &:focus {
    outline: none;
    border: none;
  }
`;

export default function SearchBar() {
  return (
    <SearchBarDiv>
      <SearchBarWrappedDiv>
        <label htmlFor="search">
          <SearchBarIconImg src={searchIcon} />
        </label>
        <SearchBarInput
          id="search"
          type="text"
          placeholder="링크를 검색해 보세요"
        />
      </SearchBarWrappedDiv>
    </SearchBarDiv>
  );
}
