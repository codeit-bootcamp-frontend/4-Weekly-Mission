import { useState } from "react";
import Card from "./Card/Card";
import CardImage from "./CardImage/CardImage";
import CardContent from "./CardContent/CardContent";

function ReadCard({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <CardImage imageSource={imageSource} alt={alt} isZoomedIn={isHovered} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
          isHovered={isHovered}
        />
      </Card>
    </a>
  );
}

export default ReadCard;
