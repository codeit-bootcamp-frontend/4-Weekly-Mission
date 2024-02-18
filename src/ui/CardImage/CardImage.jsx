import React from 'react';
import { DEFAULT_IMAGE } from './constant';
import { StyledCardImage } from './CardImageCss';

export const CardImage = ({ imageSource, alt, isZoomedIn }) => {
  return (
    <StyledCardImage 
    isZoomedIn={isZoomedIn} 
    style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }} 
    alt={alt} />
  );
};

