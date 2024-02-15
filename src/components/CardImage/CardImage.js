import "./CardImage.css";

const DEFAULT_IMAGE = "images/card-default.png";

function CardImage({ imageSource, alt, isZoomedIn }) {
  const className = isZoomedIn ? "CardImage CardImage-zoom-in" : "CardImage";

  return (
    <div
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      className={className}
      alt={alt}
    />
  );
}

export default CardImage;
