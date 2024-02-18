import styled from 'styled-components';

export const SharedPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  row-gap: 2rem;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    row-gap: 4rem;
    padding-bottom: 6rem;
  }
`;

export const SharedPageItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 112.4rem;
  row-gap: 3.2rem;
  padding: 0 3.2rem;

  @media (min-width: 768px) {
    row-gap: 4rem;
  }
`;
