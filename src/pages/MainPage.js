/*eslint-disable */
import React, { useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { MainFooter } from '../components/mainPageComponents/MainFooter';
import { useAPIData } from '../hooks/useAPIData';
import { userDataAPI } from '../api/BootcampAPI';
import {
  CloseButton,
  ModalBackground,
  ModalContent,
  Wrapper,
} from '../styles/styledComponents/folderStyled';
import ModalCloseButton from '../assets/Images/ModalCloseButton.png';
import { Modal } from '../components/folderPageComponents/modal/Modal';
import { deleteFolder } from '../api/BootcampAPI';

export default function MainPage() {
  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState({
    ModalContent: 'AddFolderModal',
    folderName: [
      '전체',
      '즐겨찾기',
      '신규폴더',
      '새로운폴더스',
      'test',
      'test2',
      'test3',
    ],
    linkCounts: [3, 0, 0, 0, 0, 0, 0],
    currentLinkCount: 3,
    currentFolderName: '전체',
    currentCardLink: 'https://www.google.com',
  });
  const modalRef = useRef(null);

  const handleModalStatus = () => {
    setModalStatus((prev) => !prev);
  };

  const handleModalContent = (value) => {
    setModalData({ ...modalData, ...value });
  };

  const handleModalStopClose = (e) => {
    e.stopPropagation();
  };

  return (
    <Wrapper>
      <Outlet
        context={{
          handleModalStatus: handleModalStatus,
          handleModalContent: handleModalContent,
          modalRef: modalRef,
        }}
      ></Outlet>
      <MainFooter></MainFooter>
      <ModalBackground $modalStatus={modalStatus} onClick={handleModalStatus}>
        <ModalContent onClick={handleModalStopClose}>
          <CloseButton
            src={ModalCloseButton}
            onClick={handleModalStatus}
          ></CloseButton>
          <Modal modalData={modalData}></Modal>
        </ModalContent>
      </ModalBackground>
    </Wrapper>
  );
}
