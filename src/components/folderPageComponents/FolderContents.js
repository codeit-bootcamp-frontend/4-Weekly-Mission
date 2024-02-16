import React from 'react';
import { SearchLink } from '../common/SearchLink';
import {
  TitleWrapper,
  CategoryWrapper,
  CategoryButton,
  CategoryName,
  AddButtonWrapper,
  AddButtonText,
  AddButtonImage,
} from '../../styles/styledComponents/folderStyled';
import Card from '../common/Card';
import { useCategoryData } from '../../hooks/useCategoryData';

/*eslint-disable */

export const FolderContents = () => {
  const { category, currentCategory, handleCategoryButton, folder } =
    useCategoryData();
  return (
    <article>
      <SearchLink></SearchLink>
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
      <TitleWrapper>
        <CategoryName>{currentCategory}</CategoryName>
        <div>
          <button>test</button>
        </div>
      </TitleWrapper>
      <div className="content-wrapper">
        {folder &&
          folder.map(
            (folderData, index) =>
              index !== 0 && (
                <Card
                  key={folderData.id}
                  imageSource={folderData.image_source}
                  createdAt={folderData.created_at}
                  description={folderData.description}
                  url={folderData.url}
                ></Card>
              ),
          )}
      </div>
    </article>
  );
};
