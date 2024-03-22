import React from "react";
import "./CardImage.css";

interface CardImageProps {
  imageSource?: string;
  alt: string;
}

const DEFAULT_IMAGE = "images/card-default.png";

function CardImage({ imageSource, alt }: CardImageProps) {
  return (
    <div
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      className="CardImage"
      aria-label={alt}
    >
      <img
        className="star"
        src="images/star.svg"
        alt="즐겨찾기를 나타내는 별"
      />
    </div>
  );
}

export default CardImage;
