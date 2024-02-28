import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 15px 16px;
  background: #f5f5f5;
  margin-bottom: 40px;
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

function SearchBar() {
  return (
    <Container>
      <Icon src="Icons/Search.svg" alt="Search" />
      <Input type="text" placeholder="링크를 검색해 보세요." />
    </Container>
  );
}

export default SearchBar;
