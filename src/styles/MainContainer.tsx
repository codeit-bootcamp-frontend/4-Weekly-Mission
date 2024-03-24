import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100;
  padding: 0 15rem;
  margin: 0 auto;
  @media (max-width: 1199px) {
    padding: 0 10rem;
  }
  @media (max-width: 767px) {
    padding: 0 5rem;
  }
`;
