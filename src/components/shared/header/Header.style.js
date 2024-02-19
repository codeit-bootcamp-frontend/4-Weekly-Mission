import styled from "styled-components"
import { Wrapper as W } from "components/Layout/Wrapper.style"

export const Header = styled.header`
  position: ${({ $isNotFixed }) => ($isNotFixed ? "static" : "fixed")};
  width: 100%;
  left: 0;
  top: 0;
  background-color: var(--gray5);
  z-index: 10;
`

export const Wrapper = styled(W)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  max-width: 1520px;
  width: calc(100% - 400px);
  margin: 0 auto;
  height: 94px;

  @media (max-width: 1520px) {
    max-width: none;
    width: 90%;
  }

  @media (max-width: 767px) {
    padding: 13px 32px;
    width: 100%;
    height: 63px;
  }
`
