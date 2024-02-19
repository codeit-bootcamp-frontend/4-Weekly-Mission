import "./CardImage.css";
import defaultImage from "../../../assets/images/card-default.png";
import star from "../../../assets/images/folder/star.svg";

const CardImage = ({ items, isZoomedIn }) => {
  const { imageSource: imageSource, image_source: image_sourse } = items;
  const imageSourceValue = imageSource || image_sourse;
  const className = isZoomedIn ? "card-image card-image-zoom-in" : "card-image";

  return (
    <div className="cardImage">
      <div
        style={{ backgroundImage: `url(${imageSourceValue ?? defaultImage})` }}
        className={className}
        alt=""
      />
      <img className="starImg" src={star} alt="likeButton" />
    </div>
  );
};

export default CardImage;
