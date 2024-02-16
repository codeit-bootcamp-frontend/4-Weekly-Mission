import React from 'react';
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

export const FolderTitle = ({ currentCategory }) => {
  return (
    <>
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
    </>
  );
};
