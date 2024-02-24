import React, { useContext } from 'react';
import {
  TitleWrapper,
  CategoryName,
  FolderOptionWrapper,
  OptionIcon,
  OptionText,
  OptionButtonWrapper,
} from '../../styles/styledComponents/folderStyled';
import Share from '../../assets/Images/share.png';
import Rename from '../../assets/Images/rename.png';
import Delete from '../../assets/Images/delete.png';
import { FolderPageContext } from '../../context/FolderPageContext';

export const FolderTitle = ({ currentCategory }) => {
  const { handleModalStatus, handleModalContent } =
    useContext(FolderPageContext);

  const handleEditFolder = () => {
    handleModalStatus();
    handleModalContent({
      ModalContent: 'EditFolderModal',
    });
  };

  const handleShareFolder = () => {
    handleModalStatus();
    handleModalContent({
      ModalContent: 'SharingModal',
      currentFolderName: currentCategory,
    });
  };

  const handleDeleteFolder = () => {
    handleModalStatus();
    handleModalContent({
      ModalContent: 'DeleteFolderModal',
      currentFolderName: currentCategory,
    });
  };

  const BUTTON = [
    { url: Share, name: '공유', onclick: handleShareFolder },
    { url: Rename, name: '이름 변경', onclick: handleEditFolder },
    { url: Delete, name: '삭제', onclick: handleDeleteFolder },
  ];

  return (
    <>
      <TitleWrapper>
        <CategoryName>{currentCategory}</CategoryName>
        {currentCategory !== '전체' && (
          <FolderOptionWrapper>
            {BUTTON.map((button) => (
              <OptionButtonWrapper key={button.name} onClick={button.onclick}>
                <OptionIcon $url={button.url}></OptionIcon>
                <OptionText>{button.name}</OptionText>
              </OptionButtonWrapper>
            ))}
          </FolderOptionWrapper>
        )}
      </TitleWrapper>
    </>
  );
};
