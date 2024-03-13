import close from '../../assets/svg/close.svg'

const ModalCloseButton = ({onClickModalLinkAdd}) => {
  return <img src={close} alt='닫기 버튼' className='closeBtn' onClick={onClickModalLinkAdd}/>
}

export default ModalCloseButton