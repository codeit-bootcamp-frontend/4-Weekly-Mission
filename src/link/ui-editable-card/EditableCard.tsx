import styles from "./EditableCard.module.scss";
import classNames from "classnames/bind";
import { useCallback, useRef, useState, MouseEventHandler } from "react";
import { Card } from "sharing/ui-card";
import { CardContent } from "sharing/ui-card-content";
import { CardImage } from "sharing/ui-card-image";
import { Popover } from "sharing/ui-popover";

const cx = classNames.bind(styles);

interface EditableCardProps {
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string | number;
  description: string;
  createdAt: string | number;
  popoverPosition: any;
  onDeleteClick: MouseEventHandler<HTMLElement>;
  onAddToFolderClick: MouseEventHandler<HTMLElement>;
}
export const EditableCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
  popoverPosition,
  onDeleteClick,
  onAddToFolderClick,
}: EditableCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const kebabButtonRef = useRef(null);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleKebabClick = (event: any) => {
    event.preventDefault();
    setIsPopoverOpen(true);
  };
  const handleBackgroundClick = useCallback(() => {
    setIsPopoverOpen(false);
  }, []);
  const handleDeleteClick = (event: any) => {
    event.preventDefault();
    onDeleteClick(event);
    setIsPopoverOpen(false);
  };
  const handleAddToFolderClick = (event: any) => {
    event.preventDefault();
    onAddToFolderClick(event);
    setIsPopoverOpen(false);
  };

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
        <button
          className={cx("star")}
          onClick={(event) => event.preventDefault()}
        >
          <img src="images/star.svg" alt="즐겨찾기를 나타내는 별" />
        </button>
        <button
          ref={kebabButtonRef}
          className={cx("kebab")}
          onClick={handleKebabClick}
        >
          <img src="images/kebab.svg" alt="더보기를 나타내는 점 3개" />
        </button>
        <Popover
          isOpen={isPopoverOpen}
          anchorRef={kebabButtonRef}
          anchorPosition={popoverPosition}
          onBackgroundClick={handleBackgroundClick}
        >
          <ul className={cx("popover-list")}>
            <li onClick={handleDeleteClick}>삭제하기</li>
            <li onClick={handleAddToFolderClick}>폴더에 추가</li>
          </ul>
        </Popover>
      </Card>
    </a>
  );
};
