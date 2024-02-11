import "./CardImage.css";

export const CardImage = ({ imageSource, alt, isZoomedIn }) => {
  const DEFAULT_IMAGE = "Images/card-default.png";
  const className = isZoomedIn ? "CardImage CardImage-zoom-in" : "CardImage";

  return (
    <div
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      className={className}
      alt={alt}
    />
  );
};
