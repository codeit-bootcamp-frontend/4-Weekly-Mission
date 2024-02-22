import styled from "styled-components"
import { Card } from "./Card.style"

export const Modal = styled(Card)`
  width: 360px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: none;
  z-index: 9999;
`

export const ModalLayout = styled.div`
  position: relative;
  padding: 32px 40px 32px 40px;
`

export const ModalExit = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
`

export const Title = styled.h3`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #242424;
`

export const Input = styled.input`
  border: 1px solid #dedede;
  border-radius: 15px;
  background-color: red;
  width: 100%;
  height: 37px;
`
