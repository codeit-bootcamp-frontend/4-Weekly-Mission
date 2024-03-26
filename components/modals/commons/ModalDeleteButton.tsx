interface ModalProps {
  children: React.ReactNode
}

const  ModalDeleteButton = ({children}: ModalProps) => {
  return <button type="button" className="modalButton delete">{children}</button>
  
}

export default  ModalDeleteButton