import styled from "styled-components";

export const LinkSearchInputWrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #f5f5f5;
  width: 100%;
  max-width: 1080px;
  margin: 40px auto;
  padding: 16px 20px;
  border-radius: 14px;

  & input {
    background: none;
    width: 100%;
    border: none;
    font-size: 1rem;
  }
`;

export const SearchIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;
export const ClearIcon = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;
