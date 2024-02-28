import { useState } from "react";
import Card from "../Card/Card";
import CardDetail from "../CardDetail/CardDetail";
import CardImg from "../CardImg/CardImg";

const ShareLinkCard = ({ url, imageSource, alt, passedTime, description, createdAt }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <CardImg imageSource={imageSource} alt={alt} isZoomedIn={isHovered} />
        <CardDetail
          passedTime={passedTime}
          description={description}
          createdAt={createdAt}
          isHovered={isHovered}
        />
      </Card>
    </a>
  );
};

export default ShareLinkCard;
