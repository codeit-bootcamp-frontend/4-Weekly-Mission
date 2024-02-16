import styled from "styled-components"

export const Logo = styled.h1`
  width: 133px;

  @media (min-width: 370px) and (max-width: 768px) {
    width: 88px;

    & * {
      width: 100%;
    }
  }
`
