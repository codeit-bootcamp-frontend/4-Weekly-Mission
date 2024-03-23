import styles from "./CardImage.module.scss";
import classNames from "classnames/bind";
import { DEFAULT_IMAGE } from "./constant";

const cx = classNames.bind(styles);

interface CardImageProps {
  imageSource: string;
  alt: string;
  isZoomedIn: boolean;
}

//질문! 템플릿 코드에는 div태그로 되어있고 alt속성을 받는데 타입스크립트 파일로 변환하니까 빨간줄떠서 img태그로 바꿨는데 이렇게 하는게 맞는지 모르겠습니다.
export const CardImage = ({ imageSource, alt, isZoomedIn }: CardImageProps) => {
  return (
    <img
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      className={cx("container", { zoomin: isZoomedIn })}
      alt={alt}
    />
  );
};
