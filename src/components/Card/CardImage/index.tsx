import defaultImage from "../../../assets/images/card-default.png";
import star from "../../../assets/images/folder/star.svg";
import { Link } from "../../../types";
import "./CardImage.css";

interface Props {
  items: Link;
  isZoomedIn: boolean;
}

export const CardImage = ({ items, isZoomedIn }: Props) => {
  const { imageSource, image_source } = items;
  const imageSourceValue = imageSource || image_source;
  const className = isZoomedIn ? "card-image card-image-zoom-in" : "card-image";

  return (
    <div className="cardImage">
      <div
        style={{ backgroundImage: `url(${imageSourceValue ?? defaultImage})` }}
        className={className}
      />
      <img className="starImg" src={star} alt="likeButton" />
    </div>
  );
};
