import CardText from "../CardDescription/CardDescription";
import CardImage from "../CardImage/CardImage";
import "./Card.css";

const Card = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
}) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="Card">
        <CardImage imageSource={imageSource} alt={alt} />
        <CardText time={elapsedTime} text={description} date={createdAt} />
      </div>
    </a>
  );
};

export default Card;
