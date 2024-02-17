import styled, { css } from "styled-components";

const FolderListItemImg = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  ${({ isHover }) =>
    isHover
      ? css`
          transform: scale(1.3);
          transform-origin: center center;
        `
      : ``}
`;
export default FolderListItemImg;
