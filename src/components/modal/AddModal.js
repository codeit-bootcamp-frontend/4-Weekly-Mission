import React, { useState } from 'react';
import {
  AddModalWrapper,
  BlueButton,
} from '../../styles/styledComponents/folderStyled';
import { AddModalButton } from './AddModalButton';

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
            <AddModalButton
              check
              folder={folder}
              idx={idx}
              key={idx}
              linkCounts={linkCounts}
              addModalCheck={addModalCheck}
              handleAddModalCheck={handleAddModalCheck}
            ></AddModalButton>
          ) : (
            <AddModalButton
              folder={folder}
              idx={idx}
              key={idx}
              linkCounts={linkCounts}
              addModalCheck={addModalCheck}
              handleAddModalCheck={handleAddModalCheck}
            ></AddModalButton>
          ),
        )}
      </AddModalWrapper>
      <BlueButton>추가하기</BlueButton>
    </>
  );
};
