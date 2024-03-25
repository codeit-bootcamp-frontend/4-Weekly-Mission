import React from "react"
import { Modal } from "./context/ModalContext"

interface DeleteFolderModalProps {
  categoryName: string
  onCloseModal: () => void
}

function DeleteFolderModal({ categoryName, onCloseModal }: DeleteFolderModalProps) {
  const value = { onCloseModal, categoryName }
  return (
    <Modal value={value}>
      <Modal.Exit />
      <Modal.Title>폴더 삭제</Modal.Title>
      <Modal.Paragraph>{categoryName}</Modal.Paragraph>
      <Modal.Button $backgroundColor="RED">변경하기</Modal.Button>
    </Modal>
  )
}

export default DeleteFolderModal
