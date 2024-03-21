import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import IconButton from "../../sharing/ui-button/IconButton";
import * as Icons from "../../sharing/Icons";

const Image = styled.img`
  position: absolute;
  left: 20px;
`;
const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const SearchInputFormContainer = styled.div`
  position: relative;
  width: 100%;

  ${Image} {
    top: 34%;
  }

  ${Input} {
    padding: 15px 16px 15px 44px;

    background-color: #f5f5f5;

    border: none;
    border-radius: 10px;
  }
`;

const StyledIconButton = styled(IconButton)`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
`;

const SearchInputForm = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState(
    searchParam.get("keyword") || "",
  );
  const navigate = useNavigate();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      navigate(`/folder?keyword=${searchKeyword}`);
    }
  };

  const deleteKeyword = () => {
    setSearchKeyword("");
    inputRef.current.value = "";
  };

  return (
    <SearchInputFormContainer>
      <Image src="/icons/search_icon.svg" alt="search icon" />
      <Input
        type="text"
        placeholder="링크를 검색해 보세요."
        defaultValue={searchKeyword || null}
        ref={inputRef}
        onChange={(e) => setSearchKeyword(e.target.value)}
        onKeyDown={handleSubmit}
      />
      {searchKeyword && (
        <StyledIconButton onClick={deleteKeyword}>
          <Icons.SearchDelete />
        </StyledIconButton>
      )}
    </SearchInputFormContainer>
  );
};

export default SearchInputForm;
