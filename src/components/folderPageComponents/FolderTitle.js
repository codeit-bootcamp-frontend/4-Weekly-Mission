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
  const BUTTON = [
    { url: Share, name: '공유' },
    { url: Rename, name: '이름 변경' },
    { url: Delete, name: '삭제' },
  ];

  return (
    <>
      <TitleWrapper>
        <CategoryName>{currentCategory}</CategoryName>
        {currentCategory !== '전체' && (
          <FolderOptionWrapper>
            {BUTTON.map((button) => (
              <OptionButtonWrapper key={button.name}>
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
