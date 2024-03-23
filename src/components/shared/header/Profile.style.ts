import styled from "styled-components"

export const Profile = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  column-gap: 6px;
`

export const Email = styled.span`
  @media (max-width: 769px) {
    & {
      display: none;
    }
  }
`

export const Image = styled.img`
  width: 28px;
  height: 28px;
`
