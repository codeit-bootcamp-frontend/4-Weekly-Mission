import styled from "styled-components"

interface BackdropProps {
  onCloseModal: () => void
}

export default function Backdrop({ onCloseModal }: BackdropProps) {
  return <ModalBackdrop onClick={onCloseModal}></ModalBackdrop>
}

const ModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  left: 0;
  top: 0;
`
