/*eslint-disable */
import React, { useState } from 'react';
import { Button } from '../../../styles/styledComponents/common';
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
} from '../../../styles/styledComponents/folderStyled';
import ModalCheck from '../../../assets/Images/ModalCheck.png';
import KakaoIcon from '../../../assets/Images/ModalKakaoButton.png';
import FaceIcon from '../../../assets/Images/ModalFacebookButton.png';
import LinkCopyIcon from '../../../assets/Images/ModallinkCopyButton.png';

export const ModalForm = ({ modalData }) => {
  const [addModalCheck, setAddModalCheck] = useState(-1);
  const handleAddModalCheck = (e, value) => {
    e.preventDefault();
    setAddModalCheck(value);
  };
  const ModalName = {
    AddLink: '폴더에 추가',
    AddFolderModal: '폴더 추가',
    EditFolderModal: '폴더 이름 변경',
    SharingModal: '폴더 공유',
    DeleteLinkModal: '링크 삭제',
    DeleteFolderModal: '폴더 삭제',
  };

  /* 
    ModalData = {
      ModalContent: ['AddLink', 'AddFolderModal', 'EditFolderModal']
      folderName: ['즐겨찾기', '신규폴더', '새로운폴더스'....],
      linkCounts: [3, 0, 0, 0, .....],
      currentLinkCount: 3,
      currentFolderName: '전체',
      currentCardLink: 'https://www.google.com'
    }
    modal 종류(string);

    추가하기 모달 => 링크 input, 개별 카드 폴더에 추가하기
    폴더 이름, 링크 개수 => folder 데이터
    현재 선택 카드 링크 => folder -> card data

    폴더 추가버튼 모달
    없음

    폴더 공유 모달
    현재 폴더 이름

    폴더 편집 모달
    없음

    폴더 삭제 모달
    현재 폴더 이름

    링크 삭제 모달
    현재 선택 card 링크 => folder -> card data

  */
  //삭제시 링크인지 폴더인지 구별하기
  //폴더인지 링크인지 ModalContent로 구분하기
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

  const AddModal = () => {
    // 링크 입력창 버튼
    const FolderButton = ({ check, folder, idx }) => {
      return (
        <>
          <AddModalFolderButton
            key={idx}
            onClick={(e) => handleAddModalCheck(e, idx)}
            checked={check}
          >
            <AddModalButtonWrapper checked>
              <AddModalFolderName>{folder}</AddModalFolderName>
              <AddModalLinkNumber>
                {modalData.linkCounts[idx]}개 링크
              </AddModalLinkNumber>
            </AddModalButtonWrapper>
            {addModalCheck === idx && (
              <AddModalCheckImg
                src={ModalCheck}
                alt="check"
                width={14}
                height={14}
              ></AddModalCheckImg>
            )}
          </AddModalFolderButton>
        </>
      );
    };

    return (
      <>
        <AddModalWrapper $overscroll={'true'}>
          {modalData.folderName.map((folder, idx) =>
            addModalCheck === idx ? (
              <FolderButton
                check
                folder={folder}
                idx={idx}
                key={idx}
              ></FolderButton>
            ) : (
              <FolderButton folder={folder} idx={idx} key={idx}></FolderButton>
            ),
          )}
        </AddModalWrapper>
        <BlueButton>추가하기</BlueButton>
      </>
    );
  };

  const SharingModal = () => {
    return (
      <>
        <ModalSharingicons>
          <ModalSharingicon>
            <img src={KakaoIcon} alt="카카오" width="42px" height="42px" />
            <ModalSharingName>
              <p>카카오톡</p>
            </ModalSharingName>
          </ModalSharingicon>
          <ModalSharingicon>
            <img src={FaceIcon} alt="페이스북" width="42px" height="42px" />
            <ModalSharingName>
              <p>페이스북</p>
            </ModalSharingName>
          </ModalSharingicon>
          <ModalSharingicon>
            <img src={LinkCopyIcon} alt="링크복사" width="42px" height="42px" />
            <ModalSharingName>
              <p>링크 복사</p>
            </ModalSharingName>
          </ModalSharingicon>
        </ModalSharingicons>
      </>
    );
  };

  const DeleteLinkModal = () => {
    return (
      <>
        <RedButton>삭제하기</RedButton>
      </>
    );
  };

  const DeleteFolderModal = () => {
    return (
      <>
        <RedButton>삭제하기</RedButton>
      </>
    );
  };

  const EditFolderModal = () => {
    // 폴더 이름 변경하는 모달
    return (
      <div>
        <ModalInput type="text" placeholder="유용한 팁" />
        <BlueButton>변경하기</BlueButton>
      </div>
    );
  };

  const AddFolderModal = () => {
    // 폴더 추가하는 모달
    return (
      <div>
        <ModalInput type="text" placeholder="내용 입력" />
        <BlueButton>추가하기</BlueButton>
      </div>
    );
  };

  const ModalType = () => {
    if (modalData.ModalContent === 'AddLink') {
      return <AddModal></AddModal>;
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
        <ModalTitie>{ModalName[modalData.ModalContent]}</ModalTitie>
        {sideHeader && <ModalSideHeader>{sideHeader}</ModalSideHeader>}
      </ModalTitleWrapper>
      <ModalType></ModalType>
    </>
  );
};
