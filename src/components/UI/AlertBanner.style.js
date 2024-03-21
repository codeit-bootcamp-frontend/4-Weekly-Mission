import styled from "styled-components"
import { Card } from "components/UI/Card.style"

export const AlertCard = styled(Card)`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  background-color: ${({ $background }) => $background};
  margin: 30px 0;
  border-radius: 7px;
  box-shadow: none;
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`

export const Message = styled.span`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ $color }) => $color};
`
