import styled, { css } from "styled-components";

const AddDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 8px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  gap: 8px;
  border-radius: 8px;

  &:hover {
    background-color: #f0f6ff;
    cursor: pointer;
  }
  ${({ clicked }) =>
    clicked
      ? css`
          background-color: #f0f6ff;
          color: #6d6afe;
        `
      : ``}
`;

export default AddDiv;
