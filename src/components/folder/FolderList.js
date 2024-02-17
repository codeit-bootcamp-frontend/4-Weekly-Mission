import styled from "styled-components";

const FolderList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 30px;

  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export default FolderList;
