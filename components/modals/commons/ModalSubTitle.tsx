interface ModalProps {
  children: React.ReactNode
}

const ModalSubTitle = ({children}: ModalProps) => {
  return (
    <h3 className="modalSubTitle">{children}</h3>
  )
}

export default ModalSubTitle