import React from 'react';
import {
  TitleWrapper,
  CategoryWrapper,
  CategoryButton,
  AddButtonWrapper,
  AddButtonText,
  AddButtonImage,
} from '../../style/styledComponents';

function FolderCategory({ category, currentCategory, handleCategoryButton }) {
  return (
    <TitleWrapper>
      <CategoryWrapper>
        {category &&
          category.map(({ id, name }) => (
            <CategoryButton
              id={id}
              key={id}
              name="folderId"
              checked={currentCategory === name ? true : null}
              onClick={handleCategoryButton}
            >
              {name}
            </CategoryButton>
          ))}
      </CategoryWrapper>

      <AddButtonWrapper>
        <AddButtonText>폴더 추가</AddButtonText>
        <AddButtonImage />
      </AddButtonWrapper>
    </TitleWrapper>
  );
}

export default FolderCategory;
