import { useRecoilState, useSetRecoilState } from "recoil";
import "./SearchInput.css";
import styled from "styled-components";
import { searchContents, searchData } from "../../store/store";
import { ChangeEvent, useRef, useState } from "react";
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

function SearchInput({ contents }: any) {
  console.log(contents);
  const inputRef = useRef<HTMLInputElement>();
  const setSearchCon: any = useSetRecoilState(searchContents);
  const [searchValues, setSearchValues] = useRecoilState<string>(searchData);
  const [searchText, setSearchText] = useState<string>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchValue = inputRef.current.value.toLowerCase();
    setSearchValues(searchValue);

    const filterContents: any = contents?.filter((item: any) => {
      const url = item.url.toLowerCase();
      const title = item.title ? item.title.toLowerCase() : "";
      const description = item.description
        ? item.description.toLowerCase()
        : "";
      return (
        url.includes(searchValue) ||
        (title && title.includes(searchValue)) ||
        (description && description.includes(searchValue))
      );
    });
    const updatedContents = { filterContents };
    setSearchCon(updatedContents.filterContents);
  };

  const handleDelete = () => {
    inputRef.current.value = "";
    setSearchText("");
  };

  const handleText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
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
          onChange={(event) => handleText(event)}
        />
        {searchText ? (
          <button
            className="searchDeleteBtn"
            type="button"
            onClick={handleDelete}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/close.png`}
              alt="검색어 삭제"
            />
          </button>
        ) : null}
      </form>
      <SearchText searchValues={searchValues} />
    </>
  );
}

export default SearchInput;
