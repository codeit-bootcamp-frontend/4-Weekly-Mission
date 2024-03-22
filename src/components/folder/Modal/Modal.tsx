import { MouseEventHandler, useContext, useRef } from 'react';
import { FolderContext } from '@/src/context/folderContext';
import * as S from './Modal.style';
import ModalContent from './ModalContent';

interface buttonObj {
  text: string;
  color: string;
}

interface contentObj {
  title: string;
  button: buttonObj | null;
}

interface Modals {
  [key: string]: contentObj;
}

const Modal = () => {
  const { modalData, changeModalData } = useContext(FolderContext);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const MODAL: Modals = {
    AddLinkModal: {
      title: '폴더에 추가',
      button: { text: '추가하기', color: 'blue' },
    },
    AddFolderModal: {
      title: '폴더 추가',
      button: { text: '추가하기', color: 'blue' },
    },
    EditFolderModal: {
      title: '폴더 이름 변경',
      button: { text: '변경하기', color: 'blue' },
    },
    SharingModal: { title: '폴더 공유', button: null },
    DeleteLinkModal: {
      title: '링크 삭제',
      button: { text: '삭제하기', color: 'red' },
    },
    DeleteFolderModal: {
      title: '폴더 삭제',
      button: { text: '삭제하기', color: 'red' },
    },
  };
  const modalType = String(modalData?.modalType);

  const deleteModal = () => {
    changeModalData({
      modalType: null,
      subTitle: null,
      folder: undefined,
      currentFolderID: null,
      currentLinkID: null,
    });
  };

  const clickOutter: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    if (wrapperRef.current && !wrapperRef.current?.contains(target)) {
      deleteModal();
    }
  };
  return (
    modalData?.modalType && (
      <S.ModalBackground onClick={clickOutter}>
        <S.ModalWrapper ref={wrapperRef}>
          <S.ModalTitleWrapper>
            <S.ModalTitle>{MODAL[modalType].title}</S.ModalTitle>
            {modalData.subTitle && (
              <S.ModalSubTitle>{String(modalData?.subTitle)}</S.ModalSubTitle>
            )}
          </S.ModalTitleWrapper>
          <ModalContent />
          {MODAL[modalType].button && (
            <S.ModalButton
              $color={String(MODAL[modalType].button?.color)}
              onClick={deleteModal}
            >
              {String(MODAL[modalType].button?.text)}
            </S.ModalButton>
          )}
          <S.ModalDeleteButton
            src="/images/close.svg"
            alt="close"
            width={24}
            height={24}
            onClick={deleteModal}
          />
        </S.ModalWrapper>
      </S.ModalBackground>
    )
  );
};

export default Modal;
