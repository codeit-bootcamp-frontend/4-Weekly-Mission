import "./CardImage.css";
import defaultImage from "../../../assets/images/card-default.png";

const CardImage = ({ items, isZoomedIn }) => {
  const className = isZoomedIn ? "card-image card-image-zoom-in" : "card-image";
  const { imageSource } = items;

  return (
    <div
      style={{ backgroundImage: `url(${imageSource ?? defaultImage})` }}
      className={className}
      alt=""
    />
  );
};

export default CardImage;
