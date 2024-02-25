import styled from "styled-components";
import { useFolder } from "../../context/FolderContext";

const Title = styled.h2`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.2px;
`;

function FolderTitle() {
  const { folderFilter } = useFolder();

  return (
    <>
      <Title>{folderFilter.name}</Title>
    </>
  );
}

export default FolderTitle;
