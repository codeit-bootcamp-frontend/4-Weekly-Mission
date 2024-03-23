import "./CardImage.css";
import { DEFAULT_IMAGE } from "./constant";

interface Props {
  imageSource: string;
  isZoomedIn: boolean;
}

export const CardImage = ({ imageSource, isZoomedIn }: Props) => {
  const className = isZoomedIn ? "CardImage CardImage-zoom-in" : "CardImage";

  return (
    <div
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      className={className}
    />
  );
};
