import { useState } from "react";
import { Card } from "ui/Card";
import { CardContent } from "ui/CardContent";
import { CardImage } from "ui/CardImage";

export const EditableCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
  favorite = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const isFolder = true;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
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
      </Card>
    </a>
  );
};
