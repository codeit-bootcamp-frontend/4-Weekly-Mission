import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as Icons from "../../sharing/Icons";
import Button from "../../sharing/Button";

const Image = styled.img`
  position: absolute;
  left: 20px;
`;
const StyledInput = styled.input`
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

  ${StyledInput} {
    padding: 15px 16px 15px 44px;

    background-color: #f5f5f5;

    border: none;
    border-radius: 10px;
  }
`;

const StyledIconButton = styled(Button)`
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
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      navigate(`/folder?keyword=${searchKeyword}`);
    }
  };

  const deleteKeyword = () => {
    setSearchKeyword("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    navigate(`/folder`);
  };

  return (
    <SearchInputFormContainer>
      <Image src="/assets/icons/search.svg" alt="search icon" />
      <StyledInput
        type="text"
        placeholder="링크를 검색해 보세요."
        defaultValue={searchKeyword || ""}
        ref={inputRef}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchKeyword(e.target.value)
        }
        onKeyDown={(e: React.KeyboardEvent) => handleSubmit(e)}
      />

      {searchKeyword && (
        <StyledIconButton variant="icon" onClick={deleteKeyword}>
          <Icons.Close />
        </StyledIconButton>
      )}
    </SearchInputFormContainer>
  );
};

export default SearchInputForm;
