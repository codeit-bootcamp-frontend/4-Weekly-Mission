import "../styles/CardSection.css";
import star from "../icons/star.svg";
import kebab from "../icons/kebab.svg";

const getElapsedTimeMessage = (createdAtTime) => {
  const currentDays = new Date();
  let ElapsedTime = Math.floor((currentDays - createdAtTime) / 1000 / 60);

  if (ElapsedTime < 2) {
    return "1 minute ago";
  }

  if (ElapsedTime < 60) {
    return `${ElapsedTime} minutes ago`;
  }

  ElapsedTime = Math.floor(ElapsedTime / 60);

  if (ElapsedTime < 24) {
    return `${ElapsedTime} ${ElapsedTime === 1 ? "hour" : "hours"} ago`;
  }

  ElapsedTime = Math.floor(ElapsedTime / 24);

  if (ElapsedTime < 31) {
    return `${ElapsedTime} ${ElapsedTime === 1 ? "day" : "days"} ago`;
  }

  ElapsedTime = Math.floor(ElapsedTime / 365);

  if (ElapsedTime < 1) {
    const currentYear = currentDays.getFullYear();
    const currentMonth = currentDays.getMonth() + 1;
    const currentDate = currentDays.getDate();
    const createdYear = createdAtTime.getFullYear();
    const createdMonth = createdAtTime.getMonth() + 1;
    const createdDate = createdAtTime.getDate();

    if (currentYear === createdYear) {
      if (currentDate >= createdDate) {
        return `${currentMonth - createdMonth} months ago`;
      }
      return `${currentMonth - createdMonth - 1} months ago`;
    }
    if (currentYear > createdYear) {
      if (currentDate >= createdDate) {
        return `${12 - createdMonth + currentMonth} months ago`;
      }
      return `${12 - createdMonth + currentMonth - 1} months ago`;
    }
  }

  if (ElapsedTime >= 1) {
    return `${ElapsedTime} ${ElapsedTime === 1 ? "year" : "years"} ago`;
  }
};

function CardSection({ url, createdAt, desc, imgUrl }) {
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
          <p className="elapsed-time">{getElapsedTimeMessage(createdDays)}</p>
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
export default CardSection;
