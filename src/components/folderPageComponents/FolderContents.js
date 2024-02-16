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
  FolderOptionWrapper,
  OptionButtonWrapper,
  OptionIcon,
  OptionText,
  NonLink,
} from '../../styles/styledComponents/folderStyled';
import Card from '../common/Card';
import { useCategoryData } from '../../hooks/useCategoryData';
import Share from '../../assets/Images/share.png';
import Rename from '../../assets/Images/rename.png';
import Delete from '../../assets/Images/delete.png';

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
        {currentCategory !== '전체' && (
          <FolderOptionWrapper>
            <OptionButtonWrapper>
              <OptionIcon $url={Share}></OptionIcon>
              <OptionText>공유</OptionText>
            </OptionButtonWrapper>
            <OptionButtonWrapper>
              <OptionIcon $url={Rename}></OptionIcon>
              <OptionText>이름 변경</OptionText>
            </OptionButtonWrapper>
            <OptionButtonWrapper>
              <OptionIcon $url={Delete}></OptionIcon>
              <OptionText>삭제</OptionText>
            </OptionButtonWrapper>
          </FolderOptionWrapper>
        )}
      </TitleWrapper>
      <div className="content-wrapper">
        {folder && folder.length >= 1 ? (
          folder.map(
            (folderData, index) =>
              index !== 0 && (
                <Card
                  key={folderData.id}
                  imageSource={folderData.image_source}
                  createdAt={folderData.created_at}
                  description={folderData.description}
                  url={folderData.url}
                  folder
                ></Card>
              ),
          )
        ) : (
          <NonLink>저장된 링크가 없습니다</NonLink>
        )}
      </div>
    </article>
  );
};
