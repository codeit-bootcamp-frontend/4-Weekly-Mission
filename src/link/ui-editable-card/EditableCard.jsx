import styles from "./EditableCard.module.scss";
import stylesPopover from "./Popover.module.css";
import classNames from "classnames/bind";
import { useState } from "react";
import { Card } from "sharing/ui-card";
import { CardContent } from "sharing/ui-card-content";
import { CardImage } from "sharing/ui-card-image";
import Popover from "./Popover";

const cx = classNames.bind(styles);

export const EditableCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const folderItems = ["삭제하기", "폴더에 추가"];

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
          className={cx("kebab")}
          onClick={(event) => event.preventDefault()}
        >
          <img src="images/kebab.svg" alt="더보기를 나타내는 점 3개" />
          <div className={stylesPopover.popover}>
            {folderItems.map((text) => (
              <Popover>{text}</Popover>
            ))}
          </div>
        </button>
      </Card>
    </a>
  );
};
