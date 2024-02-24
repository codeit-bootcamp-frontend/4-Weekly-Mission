import React from 'react';
import {
  ModalTitleWrapper,
  ModalTitie,
  ModalSideHeader,
} from '../../styles/styledComponents/folderStyled';
import { modalSubTitle } from '../../assets/utils/modalSubTitle';
import { DeleteFolderModal } from './DeleteFolderModal';
import { DeleteLinkModal } from './DeleteLinkModal';
import { SharingModal } from './SharingModal';
import { AddModal } from './AddModal';
import { AddFolderModal } from './AddFolderModal';
import { EditFolderModal } from './EditFolderModal';
const MODALNAME = {
  AddLink: '폴더에 추가',
  AddFolderModal: '폴더 추가',
  EditFolderModal: '폴더 이름 변경',
  SharingModal: '폴더 공유',
  DeleteLinkModal: '링크 삭제',
  DeleteFolderModal: '폴더 삭제',
};
export const Modal = ({ modalData }) => {
  const titleName = MODALNAME[modalData.ModalContent];
  const sideHeader = modalSubTitle(modalData);

  const ModalType = () => {
    if (modalData.ModalContent === 'AddLink') {
      return <AddModal modalData={modalData}></AddModal>;
    }
    if (modalData.ModalContent === 'AddFolderModal') {
      return <AddFolderModal></AddFolderModal>;
    }
    if (modalData.ModalContent === 'EditFolderModal') {
      return <EditFolderModal></EditFolderModal>;
    }
    if (modalData.ModalContent === 'SharingModal') {
      return <SharingModal></SharingModal>;
    }
    if (modalData.ModalContent === 'DeleteLinkModal') {
      return <DeleteLinkModal></DeleteLinkModal>;
    }
    if (modalData.ModalContent === 'DeleteFolderModal') {
      return <DeleteFolderModal></DeleteFolderModal>;
    }
  };

  return (
    <>
      <ModalTitleWrapper>
        <ModalTitie>{titleName}</ModalTitie>
        {sideHeader && <ModalSideHeader>{sideHeader}</ModalSideHeader>}
      </ModalTitleWrapper>
      <ModalType></ModalType>
    </>
  );
};
