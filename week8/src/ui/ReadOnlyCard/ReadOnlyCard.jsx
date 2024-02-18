import { useState } from "react";
import { Card } from "ui/Card";
import { CardContent } from "ui/CardContent";
import { CardImage } from "ui/CardImage";
import { formatData } from "util/formatDate";

export const ReadOnlyCard = ({
  url,
  image_source,
  alt,
  elapsedTime,
  description,
  created_at,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <CardImage
          imageSource={image_source}
          alt={alt}
          isZoomedIn={isHovered}
        />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={formatData(created_at)}
          isHovered={isHovered}
        />
      </Card>
    </a>
  );
};
