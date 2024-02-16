import styled from "styled-components"
import { Wrapper as W } from "components/Layout/Layout.style"

export const ShareHeader = styled.section`
  padding: 20px 0 60px;
  background-color: var(--gray5);

  @media (max-width: 769px) {
    padding: 10px 0 40px;
    background-color: var(--gray5);
  }
`
export const Wrapper = styled(W)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
