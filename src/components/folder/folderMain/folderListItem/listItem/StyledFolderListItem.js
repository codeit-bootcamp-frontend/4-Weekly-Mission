import styled, { css } from "styled-components";

const StyledFolderListItem = styled.a`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  ${({ isHover }) =>
    isHover
      ? css`
          background-color: #f0f6ff;
        `
      : ``}
`;

export default StyledFolderListItem;
