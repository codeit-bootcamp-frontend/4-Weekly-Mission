import styles from "./CardImage.module.scss";
import classNames from "classnames/bind";
import { DEFAULT_IMAGE } from "./constant";

interface CardImageProps {
  imageSource?: string;
  alt: string;
  isZoomedIn?: boolean;
}

const cx = classNames.bind(styles);

export const CardImage = ({ imageSource, alt, isZoomedIn }: CardImageProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      className={cx("container", { zoomin: isZoomedIn })}
      aria-label={alt}
    />
  );
};
