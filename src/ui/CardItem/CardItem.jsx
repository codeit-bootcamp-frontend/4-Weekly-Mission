import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "ui/Card";
import { CardContent } from "ui/CardContent";
import { CardImage } from "ui/CardImage";
import { WishListButton } from "ui/WishListButton/WishListButton";
import { formatData } from "util/formatDate";
import { getElapsedTime } from "util/getElapsedTime";

export const CardItem = ({
  url,
  image_source,
  alt,
  description,
  created_at,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const currentLocation = location.pathname;

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
          <CardImage
            imageSource={image_source}
            alt={alt}
            isZoomedIn={isHovered}
          />
          {currentLocation === "/folder" && <WishListButton />}
          <CardContent
            elapsedTime={getElapsedTime(created_at)}
            description={description}
            createdAt={formatData(created_at)}
            isHovered={isHovered}
            currentLocation={currentLocation}
            deleteURL={url}
          />
        </Card>
      </a>
    </>
  );
};
