import "../styles/CardSection.css";
import starImgSrc from "../assets/star.svg";
import kebabImgSrc from "../assets/kebab.svg";
import CalculateTime from "./CalculateTime";

function CardSection({ item }) {
  const createdDays = new Date(createdAt);
  const { imageSource, createdAt, description, url, id } = item;
  const { created_at, favorite, image_source } = item;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card-area"
    >
      <div className="img-group">
        {imageSource ? (
          <img src={imageSource} alt="미리보기" className="img-card" />
        ) : (
          <div className="img-card no-img"></div>
        )}
        <button className="btn-star">
          <img src={starImgSrc} alt="별모양" />
        </button>
      </div>
      <div className="card-info-group">
        <div className="time-info-group">
          <p className="elapsed-time">{CalculateTime(createdDays)}</p>
          <button className="more">
            <img src={kebabImgSrc} alt="더보기" />
          </button>
        </div>
        <p className="desc">{description}</p>
        <p className="date">{`${createdDays.getFullYear()}. ${
          createdDays.getMonth() + 1
        }. ${createdDays.getDate()}`}</p>
      </div>
    </a>
  );
}
export default CardSection;
