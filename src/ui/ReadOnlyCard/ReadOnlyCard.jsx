import { useState } from "react";
import { Card } from "ui/Card";
import { CardContent } from "ui/CardContent";
import { CardImage } from "ui/CardImage";
import { formatData } from "util/formatDate";
import { getElapsedTime } from "util/getElapsedTime";

export const ReadOnlyCard = ({
  url,
  image_source,
  alt,
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
          elapsedTime={getElapsedTime(created_at)}
          description={description}
          createdAt={formatData(created_at)}
          isHovered={isHovered}
        />
      </Card>
    </a>
  );
};
