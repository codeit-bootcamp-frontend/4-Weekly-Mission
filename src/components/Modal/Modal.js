import reactDom from 'react-dom';
import * as S from './Modalstyled';
import Button from '../Button';
import ModalList from './ModalList';
import ModalShareLink from './ModalShareLink';
import closeIcon from '../../assets/close.png';

const Modal = ({
  onClose,
  title,
  message,
  placeholder,
  value,
  btnName,
  hasInput,
  hasButton,
  hasList,
  isDelete,
  folderName,
  linkCount,
}) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return reactDom.createPortal(
    <S.ModalBackground onClick={onClose}>
      <S.ModalContainer onClick={stopPropagation}>
        <S.ModalTitle>{title}</S.ModalTitle>
        {hasInput ? (
          <S.ModaInput placeholder={placeholder} defaultValue={value} />
        ) : (
          <S.ModalMessage>{message}</S.ModalMessage>
        )}
        {hasList && <ModalList folders={folderName} folderCount={linkCount} />}
        {hasButton ? (
          <Button isDelete={isDelete} width='280px' mobileWidth='280px'>
            {btnName}
          </Button>
        ) : (
          <ModalShareLink />
        )}
        <S.ModalCloseButton src={closeIcon} alt='close' onClick={onClose} />
      </S.ModalContainer>
    </S.ModalBackground>,
    document.getElementById('modal')
  );
};

export default Modal;

//스크롤방지, defaultValue => 수정가능
