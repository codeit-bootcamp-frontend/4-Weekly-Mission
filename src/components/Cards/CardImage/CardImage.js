import "./CardImage.css";

const CardImage = ({ imageSource, alt }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageSource || `image/thumbnail/card-default.png`})`,
      }}
      className="CardImage"
      alt={alt}
    />
  );
};

export default CardImage;
