import React from 'react';
import {
  AddModalFolderButton,
  AddModalButtonWrapper,
  AddModalFolderName,
  AddModalLinkNumber,
  AddModalCheckImg,
} from '../../styles/styledComponents/folderStyled';
import ModalCheck from '../../assets/Images/ModalCheck.png';

export const AddModalButton = ({
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
