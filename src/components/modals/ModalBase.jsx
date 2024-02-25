import Dimmed from '../Dimmed'

const ModalBase = ({children}) => {
  return (
    <div className="modal">
      <Dimmed />
      {children}
    </div>
  )
}

export default ModalBase