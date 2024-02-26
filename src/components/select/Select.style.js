import styled from "styled-components"

export const Button = styled.button`
  width: 100%;
  height: 32px;
  background-color: ${({ $isPoint }) => $isPoint && `var(--gray4)`};
  color: ${({ $isPoint }) => $isPoint && `var(--primary)`};
`

export const Select = styled.ul`
  width: 100px;
  height: 64px;
  position: absolute;
  z-index: 10;
  top: 35px;
  right: 0;
  transform: translateX(50%);
  background-color: white;
  box-shadow: 0px 2px 8px 0px #3332361a;
`

export const Option = styled.li`
  text-align: center;
  font-size: 14px;
`
