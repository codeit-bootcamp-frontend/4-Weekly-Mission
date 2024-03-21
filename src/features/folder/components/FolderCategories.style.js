import styled from "styled-components"

export const Categories = styled.ul`
  position: relative;
  display: flex;
  gap: 0 8px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 12px 8px;
  }
`
