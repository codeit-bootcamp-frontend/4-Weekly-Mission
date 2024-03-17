import styled from "styled-components";
import HeadNav from "src/components/HeadNav";

export const FolderPageMain = styled.main`
  max-width: 1060px;
  margin: 40px auto;

  @media (max-width: 1124px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media (max-width: 767px) {
    max-width: 389px;
    padding: 20px 32px;
  }
`;

export const FolderHeadNav = styled(HeadNav)`
  position: relative;
`;
