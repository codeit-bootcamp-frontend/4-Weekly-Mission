import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import "./SearchInput.css";
import styled from "styled-components";
import {
  folderLinkContents,
  searchContents,
  searchData,
} from "../../store/store";
import { useRef } from "react";
import SearchText from "./SearchText";

const Search = styled.input`
  width: 100%;
  padding: 15px 16px 15px 42px;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: #f5f5f5;
  font-size: 1.6rem;
  color: rgba(102, 102, 102, 1);

  &::placeholder {
    font-size: 1.6rem;
    color: rgba(102, 102, 102, 1);
  }

  &::-webkit-search-decoration,
  -webkit-search-cancel-button,
  -webkit-search-results-button,
  -webkit-search-results-decoration {
    display: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding: 13px 16px 13px 38px;
    &::placeholder {
      font-size: 1.4rem;
    }
  }
`;

function SearchInput() {
  const inputRef = useRef<HTMLInputElement>();
  const contents = useRecoilValue(folderLinkContents);
  const setSearchCon: any = useSetRecoilState(searchContents);
  const [searchValues, setSearchValues] = useRecoilState<string>(searchData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchValue = inputRef.current.value;
    setSearchValues(searchValue);
    const filterContents: any = contents?.data?.filter((item) => {
      return (
        item.url.includes(searchValue) ||
        (item.title && item.title.includes(searchValue)) ||
        (item.description && item.description.includes(searchValue))
      );
    });
    const updatedContents = { ...contents, data: filterContents };
    setSearchCon(updatedContents);
  };

  return (
    <>
      <form
        className="searchForm"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label htmlFor="search">
          <img
            src={`${process.env.PUBLIC_URL}/images/Search.svg`}
            alt="검색 아이콘"
          />
        </label>
        <Search
          ref={inputRef}
          type="search"
          id="search"
          placeholder="링크를 검색해 보세요."
        />
      </form>
      <SearchText searchValues={searchValues} />
    </>
  );
}

export default SearchInput;
