import styled from 'styled-components';

export const GridTemplate = styled.div`
  display: grid;
  justify-content: center;
  align-items: flex-start;

  grid-template-columns: repeat(auto-fill, 34rem);
  grid-gap: 2.5rem 2rem;

  @media screen and (min-width: 767px) and (max-width: 1124px) {
    grid-template-columns: repeat(2, 34rem);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 34rem);
  }
`;
