import React from 'react';
import { DEFAULT_IMAGE } from './constant';
import { StyledCardImage, StarButton, KebabButton, ButtonsContainer } from './CardImageCss';  // 추가

export const CardImage = ({ image_source, alt, isZoomedIn }) => {
  return (
    <StyledCardImage style={{ backgroundImage: `url(${image_source ?? DEFAULT_IMAGE})` }} alt={alt}>
      <ButtonsContainer>
        <StarButton>&#9734;</StarButton>
        <KebabButton>&#8942;</KebabButton>
      </ButtonsContainer>
    </StyledCardImage>
  );
};