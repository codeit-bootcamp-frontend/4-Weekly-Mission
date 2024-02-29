import React from 'react';
import {
  ModalInput,
  BlueButton,
} from '../../styles/styledComponents/folderStyled';

export const AddFolderModal = () => {
  return (
    <>
      <ModalInput type="text" placeholder="내용 입력" />
      <BlueButton>추가하기</BlueButton>
    </>
  );
};
