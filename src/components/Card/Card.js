import "./Card.css";
import getElapsedTime from "../../util/getElapsedTime";

const Card = ({ createdAt, description, imageSource }) => {
  const elapsedTime = getElapsedTime(createdAt);
  return (
    <div className="Card">
      <img className="Card__thumb" src={imageSource} />
      <div className="Card__desc">
        <span className="Card__desc-elapsedTime">{elapsedTime}</span>
        <p className="Card__desc-text">{description}</p>
        <span className="Card__desc-createdAt">{createdAt.split("T", 1)}</span>
      </div>
    </div>
  );
};

export default Card;
