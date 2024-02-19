import "./CardImage.css";
import { DEFAULT_IMAGE } from "./constant";

export const CardImage = ({ imageSource, alt, isZoomedIn, favorite }) => {
  const className = isZoomedIn ? "CardImage CardImage-zoom-in" : "CardImage";
  const isFavorite = favorite
    ? "images/full-star.svg"
    : "images/empty-star.svg";

  return (
    <div
      style={{ backgroundImage: `url(${imageSource ?? DEFAULT_IMAGE})` }}
      className={className}
      alt={alt}
    >
      {favorite !== undefined && (
        <img className="star-button" alt="star" src={isFavorite} />
      )}
    </div>
  );
};
