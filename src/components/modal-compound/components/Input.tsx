import { useContext } from "react"
import styled from "styled-components"
import { ModalContext } from "../context/ModalContext"

export default function Input() {
  const { value, onChange, placeholder, categoryName } = useContext(ModalContext)
  return <ModalInput value={value} placeholder={categoryName || placeholder} onChange={onChange} />
}

const ModalInput = styled.input`
  width: 280px;
  height: 60px;
  border-radius: 8px;
  border: 1px solid var(--gray3);
  margin: 24px 0 15px 0;
  padding: 0 15px;
  font-size: 16px;

  &:focus {
    border: 1px solid var(--primary);
  }
`
