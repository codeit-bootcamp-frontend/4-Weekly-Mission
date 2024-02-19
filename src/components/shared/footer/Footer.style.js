import styled from "styled-components"
import { Wrapper as W } from "components/Layout/Wrapper.style"

export const Footer = styled.footer`
  margin-top: 60px;
  background: rgba(17, 19, 34, 1);
  height: 160px;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 767px) {
    margin-top: 40px;
    position: relative;
  }
`
export const Wrapper = styled(W)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0 0 0;

  @media (max-width: 767px) {
    max-width: none;
    padding: 32px;
    width: 100%;
  }
`

export const Copyright = styled.span`
  color: #676767;
  word-wrap: break-word;

  @media (max-width: 767px) {
    position: absolute;
    bottom: 32px;
    left: 32px;
  }
`

export const Nav = styled.ul`
  display: flex;
  gap: 30px;
  color: #cfcfcf;
`

export const Sns = styled.ul`
  display: flex;
  gap: 12px;

  * {
    display: block;
  }
`
