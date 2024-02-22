import styled from "styled-components";

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 390px) {
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
`;

export default TitleContainer;
