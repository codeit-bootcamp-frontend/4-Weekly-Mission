import styled from "styled-components"
import { Wrapper as W } from "components/Layout/Layout.style"
import { Card } from "components/UI/Card.style"

export const Wrapper = styled(W)``

export const ErrorCard = styled(Card)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: rgb(253, 235, 236);
  margin: 30px 0;

  .emoji {
    font-size: 20px;
    padding: 10px;
  }

  .message {
    font-size: 16px;
    font-weight: 500;
    color: #ff2828;
  }
`
