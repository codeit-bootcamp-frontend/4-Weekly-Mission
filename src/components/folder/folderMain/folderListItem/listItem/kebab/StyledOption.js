import styled, { css } from "styled-components";

const StyledOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 12px;
  ${({ mouse }) =>
    mouse === "over"
      ? css`
          background-color: #e7effb;
        `
      : css`
          background-color: white;
        `}
`;

export default StyledOption;
