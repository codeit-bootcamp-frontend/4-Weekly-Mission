import Dimmed from '../Dimmed'

const ModalBase = ({children}) => {
  return (
  <>
    <Dimmed />
    <div className="modal">
      {children}
    </div>
  </>
  )
}

export default ModalBase