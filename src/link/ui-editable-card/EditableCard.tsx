import styles from "./EditableCard.module.scss";
import classNames from "classnames/bind";
import { MouseEvent, useCallback, useRef, useState } from "react";
import { Card } from "sharing/ui-card";
import { CardContent } from "sharing/ui-card-content";
import { CardImage } from "sharing/ui-card-image";
import { Popover } from "sharing/ui-popover";
import { CardList } from "@/types/cardlist";

const cx = classNames.bind(styles);

// 멘토님께 질문! 상속 이런식으로 받는게 맞는지?
// "@/types/cardlist" 이 파일이랑 함께 확인 부탁드려용
interface EditableCardProps extends CardList {
  popoverPosition: () => void;
  onDeleteClick: () => void;
  onAddToFolderClick: () => void;
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
  const handleKebabClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsPopoverOpen(true);
  };
  const handleBackgroundClick = useCallback(() => {
    setIsPopoverOpen(false);
  }, []);
  const handleDeleteClick = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onDeleteClick();
    setIsPopoverOpen(false);
  };
  const handleAddToFolderClick = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onAddToFolderClick();
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
