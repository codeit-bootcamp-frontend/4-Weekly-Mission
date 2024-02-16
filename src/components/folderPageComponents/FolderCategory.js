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
          {category &&
            category.map((categoryData) =>
              currentCategory === categoryData.name ? (
                <CategoryButton
                  id={categoryData.id}
                  key={categoryData.id}
                  name="folderId"
                  checked
                  onClick={handleCategoryButton}
                >
                  {categoryData.name}
                </CategoryButton>
              ) : (
                <CategoryButton
                  id={categoryData.id}
                  key={categoryData.id}
                  name="folderId"
                  onClick={handleCategoryButton}
                >
                  {categoryData.name}
                </CategoryButton>
              ),
            )}
        </CategoryWrapper>
        <AddButtonWrapper>
          <AddButtonText>폴더 추가</AddButtonText>
          <AddButtonImage></AddButtonImage>
        </AddButtonWrapper>
      </TitleWrapper>
    </>
  );
};
