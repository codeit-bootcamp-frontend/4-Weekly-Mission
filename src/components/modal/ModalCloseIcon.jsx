import ModalCloseIcon from '../../assets/modal-close.svg';
import * as Styled from './Modal.styled';

function ModalCloseButton({ onClick }) {
  return <Styled.ModalCloseIcon onClick={onClick} src={ModalCloseIcon} alt='모달 닫기 아이콘' />;
}

export default ModalCloseButton;
