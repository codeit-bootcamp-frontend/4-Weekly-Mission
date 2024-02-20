import { useState } from "react";
import { Card } from "ui/Card";
import { CardContent } from "ui/CardContent";
import { CardImage } from "ui/CardImage";
import { WishListButton } from "ui/WishListButton/WishListButton";

export function SharedPossibleCard({
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
        <WishListButton className="wish-list-button" />
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
