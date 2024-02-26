import "./CardImg.css";
const DEFAULT_IMAGE = "images/default-card-img.png";

const CardImg = ({ imageSource, alt, isZoomedIn }) => {
  const className = isZoomedIn ? "CardImg CardImg_Zoom" : "CardImg";

  return (
    <div
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      className={className}
      alt={alt}
    />
  );
};

export default CardImg;
