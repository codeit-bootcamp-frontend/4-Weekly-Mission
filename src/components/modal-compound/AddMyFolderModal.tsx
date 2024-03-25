import { useState } from "react"
import { Modal } from "./context/ModalContext"

interface AddMyFolderModalProps {
  data: any
  onCloseModal: () => void
}

export default function AddMyFolderModal({ data, onCloseModal }: AddMyFolderModalProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const handleSelectItem = (id: string) => setSelected(id)

  const value = { onCloseModal, selectedItem: selected, onSelectedItem: handleSelectItem }

  return (
    <Modal value={value}>
      <Modal.Exit />
      <Modal.Title>폴더 이름 변경</Modal.Title>
      <Modal.Categories />
      <Modal.Button $backgroundColor="GRADIENT">추가하기</Modal.Button>
    </Modal>
  )
}
