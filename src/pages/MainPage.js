/*eslint-disable */
import React, { useState } from 'react';
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

export default function MainPage() {
  const { data: userProfile } = useAPIData(userDataAPI);
  const { modalStatus, setModalStatus } = useState(true);
  const { modalContent, setModalContent } = useState(null);
  const handleModalStatus = () => {
    setModalStatus((prev) => !prev);
  };
  const handleModalContent = (value) => {
    setModalContent(value);
  };
  return (
    <Wrapper>
      <Outlet
        context={{
          userProfile: userProfile,
          handleModalStatus: handleModalStatus,
          handleModalContent: handleModalContent,
        }}
      ></Outlet>
      <MainFooter></MainFooter>
      {/* <ModalBackground modalStatus={modalStatus}>
        <ModalContent contentHeight={360}>
          <CloseButton src={ModalCloseButton}></CloseButton>
          <div></div>
        </ModalContent>
      </ModalBackground> */}
    </Wrapper>
  );
}
