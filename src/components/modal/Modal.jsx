import ModalCloseButton from './ModalCloseIcon';
import ModalShareList from './ModalShareList';
import ModalFolderAdd from './ModalFolderAdd';
import ModalTitle from './ModalTitle';
import ModalForm from './ModalForm';
import { useEffect } from 'react';
import * as Styled from './Modal.styled';

function Modal({ modalAction, setModalAction, categoryList }) {
  const categoryListLoop = categoryList.slice(1); // 전체 카테고리는 제외
  const isSubTitleView = modalAction.subTitle !== '' && modalAction.action !== '폴더 이름 변경';
  const actionScript = {
    '폴더 이름 변경': <ModalForm buttonText='변경하기' />,
    '폴더 추가': <ModalForm buttonText='추가하기' />,
    '폴더 공유': <ModalShareList modalAction={modalAction} />,
    '폴더에 추가': <ModalFolderAdd categoryListLoop={categoryListLoop} />,
    '링크 삭제': <Styled.ModalButtonRed>삭제하기</Styled.ModalButtonRed>,
    '폴더 삭제': <Styled.ModalButtonRed>삭제하기</Styled.ModalButtonRed>,
  };

  const handleModalClose = () => {
    setModalAction({
      isView: false,
      action: '',
      subTitle: '',
    });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script)
    }
  })

  return (
    <>
      {modalAction.isView && (
        <Styled.ModalBox>
          <Styled.Modal>
            <ModalCloseButton onClick={handleModalClose} />
            <ModalTitle title={modalAction.action} />
            {isSubTitleView && <Styled.ModalSubTitle>{modalAction.subTitle}</Styled.ModalSubTitle>}
            {actionScript[modalAction.action]}
          </Styled.Modal>
        </Styled.ModalBox>
      )}
    </>
  );
}

export default Modal;
