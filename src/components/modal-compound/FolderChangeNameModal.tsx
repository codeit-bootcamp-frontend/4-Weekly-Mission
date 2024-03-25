import { ChangeEvent, useState } from "react"
import { Modal } from "./context/ModalContext"

interface FolderChangeNameModalProps {
  categoryName: string
  onCloseModal: () => void
}

function FolderChangeNameModal({ categoryName, onCloseModal }: FolderChangeNameModalProps) {
  const [inputValue, setInputValue] = useState("")
  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)
  const value = { onCloseModal, categoryName, onChange: handleChangeInputValue, value: inputValue }

  return (
    <Modal value={value}>
      <Modal.Exit />
      <Modal.Title>폴더 이름 변경</Modal.Title>
      <Modal.Input />
      <Modal.Button $backgroundColor="GRADIENT">변경하기</Modal.Button>
    </Modal>
  )
}

export default FolderChangeNameModal
