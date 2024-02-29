import React from 'react';
import {
  ModalInput,
  BlueButton,
} from '../../styles/styledComponents/folderStyled';
export const EditFolderModal = () => {
  return (
    <>
      <ModalInput type="text" placeholder="유용한 팁" />
      <BlueButton>변경하기</BlueButton>
    </>
  );
};
