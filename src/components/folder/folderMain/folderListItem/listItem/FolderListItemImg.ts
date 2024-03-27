import styled from "styled-components";

const FolderListItemImg = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.3);
    transform-origin: center center;
  }
`;
export default FolderListItemImg;
