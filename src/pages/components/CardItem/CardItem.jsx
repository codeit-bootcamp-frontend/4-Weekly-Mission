import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "pages/components/Card";
import { CardContent } from "pages/components/CardContent";
import { CardImage } from "pages/components/CardImage";
import { WishListButton } from "pages/Folder/components/WishListButton/WishListButton";
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
            selectURL={url}
          />
        </Card>
      </a>
    </>
  );
};
