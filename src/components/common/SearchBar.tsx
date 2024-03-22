import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 15px 16px;
  background: #f5f5f5;
  margin-bottom: 40px;
  display: flex;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  fill: rgba(0, 0, 0, 0);
`;

const Input = styled.input`
  width: 95%;
  background: #f5f5f5;
  border: none;
  margin-left: 10px;

  &:focus {
    outline: none;
  }

  @media (max-width: 767px) {
    width: 91%;
  }
`;

const ResetBtn = styled.img`
  cursor: pointer;
`;

function SearchBar() {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const Reset = () => {
    setValue("");
  };
  return (
    <Container>
      <Icon src="Icons/Search.svg" alt="Search" />
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="링크를 검색해 보세요."
      />
      <ResetBtn
        src="Icons/searchReset.svg"
        alt="reset"
        onClick={Reset}
      />
    </Container>
  );
}

export default SearchBar;
