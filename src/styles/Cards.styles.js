import styled from 'styled-components';

export const CardsSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin: 2rem 0;

  @media screen and (width>767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (width>1124px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
