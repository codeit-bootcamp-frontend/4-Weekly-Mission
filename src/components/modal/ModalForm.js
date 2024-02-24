/*eslint-disable */
import React, { useState } from 'react';
import {
  AddModalWrapper,
  AddModalFolderButton,
  AddModalButtonWrapper,
  AddModalCheckImg,
  ModalSideHeader,
  AddModalFolderName,
  AddModalLinkNumber,
  ModalSharingicons,
  ModalSharingicon,
  RedButton,
  ModalSharingName,
  ModalInput,
  BlueButton,
  ModalTitie,
  ModalTitleWrapper,
} from '../../styles/styledComponents/folderStyled';
import ModalCheck from '../../assets/Images/ModalCheck.png';
import KakaoIcon from '../../assets/Images/ModalKakaoButton.png';
import FaceIcon from '../../assets/Images/ModalFacebookButton.png';
import LinkCopyIcon from '../../assets/Images/ModallinkCopyButton.png';

export const ModalForm = ({ modalData }) => {
  const ModalName = {
    AddLink: '폴더에 추가',
    AddFolderModal: '폴더 추가',
    EditFolderModal: '폴더 이름 변경',
    SharingModal: '폴더 공유',
    DeleteLinkModal: '링크 삭제',
    DeleteFolderModal: '폴더 삭제',
  };

  let sideHeader = null;

  if (
    modalData.ModalContent === 'DeleteLinkModal' ||
    modalData.ModalContent === 'AddLink'
  ) {
    sideHeader = modalData.currentCardLink;
  } else if (
    modalData.ModalContent === 'DeleteFolderModal' ||
    modalData.ModalContent === 'SharingModal'
  ) {
    sideHeader = modalData.currentFolderName;
  }

  const AddFolderModal = () => {
    // 폴더 추가하는 모달
    return (
      <div>
        <ModalInput type="text" placeholder="내용 입력" />
        <BlueButton>추가하기</BlueButton>
      </div>
    );
  };

  return (
    <>
      <ModalTitleWrapper>
        <ModalTitie>{ModalName[modalData.ModalContent]}</ModalTitie>
        {sideHeader && <ModalSideHeader>{sideHeader}</ModalSideHeader>}
      </ModalTitleWrapper>
      <ModalType></ModalType>
    </>
  );
};
