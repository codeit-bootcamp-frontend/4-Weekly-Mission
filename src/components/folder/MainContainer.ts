import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 40px 0;
  max-width: 1060px;
  min-height: 1200px;
  width: 100%;
  @media (max-width: 1124px) {
    padding: 40px 32px;
  }
`;
export default MainContainer;
