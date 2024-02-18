import "./CardImage.css";
import defaultImage from "../../../assets/images/card-default.png";

const CardImage = ({ items, isZoomedIn }) => {
  const { imageSource: imageSource, image_source: image_sourse } = items;
  const imageSourceValue = imageSource || image_sourse;
  const className = isZoomedIn ? "card-image card-image-zoom-in" : "card-image";

  return (
    <div
      style={{ backgroundImage: `url(${imageSourceValue ?? defaultImage})` }}
      className={className}
      alt=""
    />
  );
};

export default CardImage;
