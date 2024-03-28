import styles from './EditableCard.module.scss';
import classNames from 'classnames/bind';
import { useCallback, useRef, useState } from 'react';
import Card from '@/components/card/Card';
import CardContent from '@/components/card/content/CardContent';
import CardImage from '@/components/card/image/CardImage';
import Popover from '@/components/popover/Popover';
import { MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type AnchorPositionType = {
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
};

type EditableCardType = {
  url: string;
  imageSource?: string;
  alt?: string;
  elapsedTime?: string;
  description?: string;
  createdAt?: string;
  popoverPosition: AnchorPositionType;
  onDeleteClick: () => void;
  onAddToFolderClick: () => void;
};

const cx = classNames.bind(styles);

const EditableCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
  popoverPosition,
  onDeleteClick,
  onAddToFolderClick,
}: EditableCardType) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const kebabButtonRef = useRef(null);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleKebabClick = (event: MouseEvent) => {
    event.preventDefault();
    setIsPopoverOpen(true);
  };
  const handleBackgroundClick = useCallback(() => {
    setIsPopoverOpen(false);
  }, []);
  const handleDeleteClick = (event: MouseEvent) => {
    event.preventDefault();
    onDeleteClick();
    setIsPopoverOpen(false);
  };
  const handleAddToFolderClick = (event: MouseEvent) => {
    event.preventDefault();
    onAddToFolderClick();
    setIsPopoverOpen(false);
  };

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <CardImage imageSource={imageSource} alt={alt} isZoomedIn={isHovered} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
          isHovered={isHovered}
        />
        <button className={cx('star')} onClick={(event) => event.preventDefault()}>
          <Image src="images/star.svg" alt="즐겨찾기를 나타내는 별" width={34} height={34} />
        </button>
        <button ref={kebabButtonRef} className={cx('kebab')} onClick={handleKebabClick}>
          <Image src="images/kebab.svg" alt="더보기를 나타내는 점 3개" width={21} height={17} />
        </button>
        <Popover
          isOpen={isPopoverOpen}
          anchorRef={kebabButtonRef}
          anchorPosition={popoverPosition}
          onBackgroundClick={handleBackgroundClick}
        >
          <ul className={cx('popover-list')}>
            <li onClick={handleDeleteClick}>삭제하기</li>
            <li onClick={handleAddToFolderClick}>폴더에 추가</li>
          </ul>
        </Popover>
      </Card>
    </Link>
  );
};

export default EditableCard;
