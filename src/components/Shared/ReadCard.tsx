import React from "react";
import Card from "../common/Card/Card.tsx";
import CardImage from "../common/CardImage/CardImage.tsx";
import CardContent from "../common/CardContent/CardContent.tsx";

interface ReadCardProps {
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  description: string;
  createdAt: string;
}
function ReadCard({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}: ReadCardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card>
        <CardImage imageSource={imageSource} alt={alt} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
        />
      </Card>
    </a>
  );
}
export default ReadCard;
