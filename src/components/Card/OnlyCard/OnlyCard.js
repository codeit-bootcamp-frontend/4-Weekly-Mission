import { useState } from "react";
import { CardImage } from "../CardImage";
import { CardWrapper } from "../CardWrapper";
import { CardContent } from "../CardContent";

export const OnlyCard = ({ items, linkUrl, folderList }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handlePreventLinkClick = (e) => {
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
        <CardContent
          items={items}
          handlePreventLinkClick={handlePreventLinkClick}
          linkUrl={linkUrl}
          folderList={folderList}
        />
      </CardWrapper>
    </a>
  );
};
