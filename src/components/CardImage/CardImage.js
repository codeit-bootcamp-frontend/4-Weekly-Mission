import "./CardImage.css";

const DEFAULT_IMAGE = "images/card-default.png";

function CardImage({ imageSource, alt }) {
  return (
    <div
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      className="CardImage"
      alt={alt}
    >
      <img
        className="star"
        src="images/star.svg"
        alt="즐겨찾기를 나타내는 별"
      />
    </div>
  );
}

export default CardImage;
