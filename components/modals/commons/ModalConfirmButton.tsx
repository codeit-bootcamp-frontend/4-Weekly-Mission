interface ModalProps {
  children: React.ReactNode
}

const ModalConfirmButton = ({children}: ModalProps) => {
  return <button type="button" className="modalButton">{children}</button>
  
}

export default  ModalConfirmButton