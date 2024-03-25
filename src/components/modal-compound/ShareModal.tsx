import { Modal } from "./context/ModalContext"

interface ShareModalProps {
  categoryName: string
  onCloseModal: () => void
  categoryData: any
}

export default function ShareModal({ categoryName, onCloseModal, categoryData }: ShareModalProps) {
  const value = { onCloseModal, categoryName, categoryData }
  return (
    <Modal value={value}>
      <Modal.Exit />
      <Modal.Title>폴더 공유</Modal.Title>
      <Modal.Paragraph>{categoryName}</Modal.Paragraph>
      <Modal.Share />
    </Modal>
  )
}
