import { useState } from "react";
import { CardContent } from "ui/CardContent";
import { CardImage } from "ui/CardImage";
import "./Card.css";

export const Card = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
  favorite,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const isFolder = typeof favorite !== "undefined";

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div
        className="Card"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <CardImage
          imageSource={imageSource}
          alt={alt}
          isZoomedIn={isHovered}
          favorite={favorite}
        />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
          isHovered={isHovered}
          isFolder={isFolder}
        />
      </div>
    </a>
  );
};
