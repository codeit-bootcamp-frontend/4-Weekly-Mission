import { MouseEventHandler, useContext, useRef } from 'react';
import folderContext from '@/src/context/folderContext';
import {
  ModalBackground,
  ModalButton,
  ModalDeleteButton,
  ModalSubTitle,
  ModalTitle,
  ModalTitleWrapper,
  ModalWrapper,
} from './Modal.style';
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
  const { modalData, changeModalData } = useContext(folderContext);
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
      <ModalBackground onClick={clickOutter}>
        <ModalWrapper ref={wrapperRef}>
          <ModalTitleWrapper>
            <ModalTitle>{MODAL[modalType].title}</ModalTitle>
            {modalData.subTitle && (
              <ModalSubTitle>{String(modalData?.subTitle)}</ModalSubTitle>
            )}
          </ModalTitleWrapper>
          <ModalContent />
          {MODAL[modalType].button && (
            <ModalButton
              $color={String(MODAL[modalType].button?.color)}
              onClick={deleteModal}
            >
              {String(MODAL[modalType].button?.text)}
            </ModalButton>
          )}
          <ModalDeleteButton
            src="/images/close.svg"
            alt="close"
            width={24}
            height={24}
            onClick={deleteModal}
          />
        </ModalWrapper>
      </ModalBackground>
    )
  );
};

export default Modal;
