import styles from './CardImage.module.scss';
import classNames from 'classnames/bind';
import { DEFAULT_IMAGE } from '@/utils/constant';
import { HTMLAttributes } from 'react';

type CardImageType = {
  imageSource?: string;
  alt?: string;
  isZoomedIn: boolean;
} & HTMLAttributes<HTMLDivElement>;

const cx = classNames.bind(styles);

const CardImage = ({ imageSource, alt, isZoomedIn }: CardImageType) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      className={cx('container', { zoomin: isZoomedIn })}
      // alt 쓰면 오류 발생 .. alt는 원래 img 아닌가 ..?
      // alt={alt}
    />
  );
};

export default CardImage;
