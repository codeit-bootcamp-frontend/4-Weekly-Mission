import "../styles/SharedCardSection.css";
import star from "../assets/star.svg";
import kebab from "../assets/kebab.svg";
import CalculateTime from "../functions/CalculateTime";

function SharedCardSection({ url, createdAt, desc, imgUrl }) {
  const createdDays = new Date(createdAt);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card-area"
    >
      <div className="img-group">
        {imgUrl ? (
          <img src={imgUrl} alt="미리보기" className="img-card" />
        ) : (
          <div className="img-card no-img"></div>
        )}
        <button className="btn-star">
          <img src={star} alt="별모양" />
        </button>
      </div>
      <div className="card-info-group">
        <div className="time-info-group">
          <p className="elapsed-time">{CalculateTime(createdDays)}</p>
          <button className="more">
            <img src={kebab} alt="더보기" />
          </button>
        </div>
        <p className="desc">{desc}</p>
        <p className="date">{`${createdDays.getFullYear()}. ${
          createdDays.getMonth() + 1
        }. ${createdDays.getDate()}`}</p>
      </div>
    </a>
  );
}
export default SharedCardSection;
