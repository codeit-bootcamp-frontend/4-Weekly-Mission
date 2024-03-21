import styled from "styled-components"

export const Avatar = styled.img`
  width: 60px;
  height: 60px;

  @media (max-width: 769px) {
    width: 40px;
    height: 40px;
  }
`

export const Name = styled.span`
  display: block;
  line-height: 24px;
  margin: 12px 0 20px 0;

  @media (max-width: 769px) {
    font-size: 14px;
    margin: 6px 0 10px 0;
    line-height: 16px;
  }
`

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;

  @media (max-width: 769px) {
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
  }
`
