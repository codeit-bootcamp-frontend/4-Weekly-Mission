import { MouseEvent, useState } from "react";
import { CardImage } from "../CardImage";
import { CardWrapper } from "../CardWrapper";
import { CardContent } from "../CardContent";
import { Link, Folder } from "../../../types";

interface Props {
  items: Link;
  folderList?: Folder[];
}

export const OnlyCard = ({ items, folderList = [] }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handlePreventLinkClick = (e: MouseEvent) => {
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
          folderList={folderList}
          isZoomedIn={true}
        />
      </CardWrapper>
    </a>
  );
};
