import styled from "styled-components"

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 340px);
  gap: 24px 20px;
  justify-items: center;

  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 44.213vw);
    gap: 3.121vw;
  }

  @media (max-width: 769px) {
    grid-template-columns: repeat(1, 100%);
    gap: 5.128vw;
  }
`
