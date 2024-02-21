import { useState } from "react";
import { CardImage } from "../CardImage";
import { CardWrapper } from "../CardWrapper";
import { CardContent } from "../CardContent";

export const OnlyCard = ({ items }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleLinkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <a href={items.url} target="_blank" rel="noopener noreferrer">
      <CardWrapper
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <CardImage items={items} isZoomedIn={isHovered} />
        <CardContent items={items} handleLinkClick={handleLinkClick} />
      </CardWrapper>
    </a>
  );
};
