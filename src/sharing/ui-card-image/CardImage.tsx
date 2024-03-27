import styles from "./CardImage.module.scss";
import classNames from "classnames/bind";
import { DEFAULT_IMAGE } from "./constant";

const cx = classNames.bind(styles);
interface CardImageProps {
  imageSource: string;
  alt: string;
  isZoomedIn: any;
}
export const CardImage = ({ imageSource, alt, isZoomedIn }: CardImageProps) => {
  return (
    <img
      src={imageSource ?? DEFAULT_IMAGE}
      alt={alt}
      className={cx("container", { zoomin: isZoomedIn })}
    />
  );
};
