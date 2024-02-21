import React from 'react';
import {
  TitleWrapper,
  CategoryWrapper,
  CategoryButton,
  AddButtonWrapper,
  AddButtonText,
  AddButtonImage,
} from '../../styles/styledComponents/folderStyled';

export const FolderCategory = ({
  category,
  currentCategory,
  handleCategoryButton,
}) => {
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
        <AddButtonWrapper>
          <AddButtonText>폴더 추가</AddButtonText>
          <AddButtonImage></AddButtonImage>
        </AddButtonWrapper>
      </TitleWrapper>
    </>
  );
};
