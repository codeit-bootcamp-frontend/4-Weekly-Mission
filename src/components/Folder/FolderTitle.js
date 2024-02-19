import React from 'react';
import {
  TitleWrapper,
  CategoryName,
  FolderOptionWrapper,
  OptionIcon,
  OptionText,
  OptionButtonWrapper,
} from '../../style/styledComponents';
import shareImg from '../../images/share.svg';
import renameImg from '../../images/rename.svg';
import deleteImg from '../../images/delete.svg';

export const FolderTitle = ({ currentCategory }) => {
  const BUTTON = [
    { url: shareImg, name: '공유' },
    { url: renameImg, name: '이름 변경' },
    { url: deleteImg, name: '삭제' },
  ];

  return (
    <>
      <TitleWrapper>
        <CategoryName>{currentCategory}</CategoryName>
        {currentCategory !== '전체' && (
          <FolderOptionWrapper>
            {BUTTON.map((button) => (
              <OptionButtonWrapper key={button.name}>
                <OptionIcon url={button.url}></OptionIcon>
                <OptionText>{button.name}</OptionText>
              </OptionButtonWrapper>
            ))}
          </FolderOptionWrapper>
        )}
      </TitleWrapper>
    </>
  );
};
