import React, { useState } from 'react';
import {
  AddModalFolderButton,
  AddModalButtonWrapper,
  AddModalFolderName,
  AddModalLinkNumber,
  AddModalCheckImg,
  AddModalWrapper,
  BlueButton,
} from '../../styles/styledComponents/folderStyled';
import ModalCheck from '../../assets/Images/ModalCheck.png';

const FolderButton = ({
  check,
  folder,
  idx,
  linkCounts,
  addModalCheck,
  handleAddModalCheck,
}) => {
  return (
    <>
      <AddModalFolderButton
        onClick={(e) => handleAddModalCheck(e, idx)}
        checked={check}
      >
        <AddModalButtonWrapper>
          <AddModalFolderName>{folder}</AddModalFolderName>
          <AddModalLinkNumber>{linkCounts[idx]}개 링크</AddModalLinkNumber>
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

export const AddModal = ({ modalData }) => {
  const overScroll = modalData.folderName.length > 4 ? 'true' : 'false';
  const linkCounts = modalData.linkCounts;
  const [addModalCheck, setAddModalCheck] = useState(-1);
  const handleAddModalCheck = (e, value) => {
    e.preventDefault();
    setAddModalCheck(value);
  };

  // 링크 입력창 버튼
  return (
    <>
      <AddModalWrapper $overscroll={overScroll}>
        {modalData.folderName.map((folder, idx) =>
          addModalCheck === idx ? (
            <FolderButton
              check
              folder={folder}
              idx={idx}
              key={idx}
              linkCounts={linkCounts}
              addModalCheck={addModalCheck}
              handleAddModalCheck={handleAddModalCheck}
            ></FolderButton>
          ) : (
            <FolderButton
              folder={folder}
              idx={idx}
              key={idx}
              linkCounts={linkCounts}
              addModalCheck={addModalCheck}
              handleAddModalCheck={handleAddModalCheck}
            ></FolderButton>
          ),
        )}
      </AddModalWrapper>
      <BlueButton>추가하기</BlueButton>
    </>
  );
};
