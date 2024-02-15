import "./CardImage.css";

const DEFAULT_IMAGE = "images/card-default.png";

function CardImage({ imageSource, alt }) {
  return (
    <div
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      className="CardImage"
      alt={alt}
    />
  );
}

export default CardImage;
