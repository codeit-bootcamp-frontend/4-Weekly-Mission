import React from "react";
import * as S from "./CardImageStyled.tsx";

const DEFAULT_IMAGE = "images/card-default.png";
const STAR_IMAGE = "images/star.svg";

interface CardImageProps {
  imageSource?: string;
  alt: string;
}

function CardImage({ imageSource, alt }: CardImageProps) {
  return (
    <S.CardImage
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      aria-label={alt}
    >
      <S.Star src={STAR_IMAGE} alt="즐겨찾기를 나타내는 별" />
    </S.CardImage>
  );
}

export default CardImage;
