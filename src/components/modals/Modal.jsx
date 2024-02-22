import close from '../../assets/svg/close.svg'

const Modal = ()=>{
  return (
    <div>
      <h2 className="modalTitle"></h2>
      <button type="button" className="modalButton"></button>
      <img src={close} alt='닫기 버튼' />
    </div>
  )
}

export default Modal


