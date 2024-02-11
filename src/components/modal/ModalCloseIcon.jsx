import ModalCloseIcon from "../../assets/modal-close.svg";
function ModalCloseButton({onClick}){
    return <img
    onClick={onClick}
    className="modal__close" src={ModalCloseIcon} alt="모달 닫기 아이콘" />
}

export default ModalCloseButton;