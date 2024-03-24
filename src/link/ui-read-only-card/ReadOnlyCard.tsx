import { InputHTMLAttributes, useState } from "react";
import { Card } from "../../sharing/ui-card";
import { CardContent } from "../../sharing/ui-card-content";
import { CardImage } from "../../sharing/ui-card-image";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  url: string;
  imageSource: string;
  elapsedTime: string;
  description: string;
  createdAt: Date;
}

export const ReadOnlyCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}: Props) => {
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
};
