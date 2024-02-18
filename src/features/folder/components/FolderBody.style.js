import styled from "styled-components"
import { Wrapper as W } from "components/Layout/Wrapper.style"

export const Section = styled.section``

export const Wrapper = styled(W)``

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;

  @media (max-width: 900px) {
    & + & {
      display: block;
      margin: 28px 0 20px 0;
    }
  }
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
`

export const Link = styled.article`
  position: relative;
`
