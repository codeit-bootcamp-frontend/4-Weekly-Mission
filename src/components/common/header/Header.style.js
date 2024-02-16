import { Link } from "react-router-dom"
import styled from "styled-components"
import { Wrapper as W } from "components/Layout/Layout.style"

export const Header = styled.header`
  position: fixed;
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

export const LoginButton = styled.a`
  padding: 16px 40.5px;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  border-radius: 8px;
  color: var(--white);
  display: block;

  @media (max-width: 1520px) {
    & {
      padding: 10px 21.5px;
      font-size: 14px;
    }
  }

  @media (max-width: 767px) {
    & {
      padding: 10px 21.5px;
      font-size: 14px;
    }
  }
`
