import React, { useContext } from 'react';
import {
  TitleWrapper,
  CategoryWrapper,
  CategoryButton,
  AddButtonWrapper,
  AddButtonText,
  AddButtonImage,
} from '../../styles/styledComponents/folderStyled';
import { FolderPageContext } from '../../context/FolderPageContext';

/* eslint-disable */

export const FolderCategory = ({
  category,
  currentCategory,
  handleCategoryButton,
}) => {
  const { handleModalStatus, handleModalContent } =
    useContext(FolderPageContext);

  const handleAddFolder = () => {
    handleModalStatus();
    handleModalContent({
      ModalContent: 'AddFolderModal',
    });
  };

  return (
    <>
      <TitleWrapper>
        <CategoryWrapper>
          {category?.map((categoryData) => (
            <CategoryButton
              id={categoryData.id}
              key={categoryData.id}
              name="folderId"
              checked={currentCategory === categoryData.name ? true : null}
              onClick={handleCategoryButton}
            >
              {categoryData.name}
            </CategoryButton>
          ))}
        </CategoryWrapper>
        <AddButtonWrapper onClick={handleAddFolder}>
          <AddButtonText>폴더 추가</AddButtonText>
          <AddButtonImage></AddButtonImage>
        </AddButtonWrapper>
      </TitleWrapper>
    </>
  );
};
