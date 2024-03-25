import { Modal } from "./context/ModalContext"

interface DeleteLinkModalProps {
  url: string
  onCloseModal: () => void
}

function DeleteLinkModal({ url, onCloseModal }: DeleteLinkModalProps) {
  const value = { onCloseModal }
  return (
    <Modal value={value}>
      <Modal.Exit />
      <Modal.Title>폴더 삭제</Modal.Title>
      <Modal.Paragraph>{url}</Modal.Paragraph>
      <Modal.Button $backgroundColor="RED">삭제하기</Modal.Button>
    </Modal>
  )
}

export default DeleteLinkModal
