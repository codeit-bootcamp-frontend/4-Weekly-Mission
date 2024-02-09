import "./css/Card.css";
import { SAMPLE_IMAGE_URL } from "../constant";

const getTimeDifference = (createdDate, currentDate) => {
  const differenceInSeconds = Math.floor((currentDate - createdDate) / 1000);
  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86400;
  const secondsInMonth = 2592000;
  const secondsInYear = 31536000;

  if (differenceInSeconds < secondsInMinute) {
    return "1 minute ago";
  } else if (differenceInSeconds <= secondsInHour) {
    const minutes = Math.floor(differenceInSeconds / secondsInMinute);
    return `${minutes} minutes ago`;
  } else if (differenceInSeconds < secondsInDay) {
    const hours = Math.floor(differenceInSeconds / secondsInHour);
    return `${hours} hours ago`;
  } else if (differenceInSeconds < secondsInMonth) {
    const days = Math.floor(differenceInSeconds / secondsInDay);
    return `${days} days ago`;
  } else if (differenceInSeconds < secondsInYear) {
    const months = Math.floor(differenceInSeconds / secondsInMonth);
    return `${months} months ago`;
  } else {
    const years = Math.floor(differenceInSeconds / secondsInYear);
    const remainingMonths = Math.floor(
      (differenceInSeconds % secondsInYear) / secondsInMonth,
    );
    if (remainingMonths > 0) {
      return `${years} years ago`;
    } else {
      return `${years} years ago`;
    }
  }
};

const Card = ({ cardImage = null, cardCreated, cardDescription }) => {
  const createDate = new Date(cardCreated);
  const currentDate = new Date();

  const createDateString = `${createDate.getFullYear()}. ${
    createDate.getMonth() + 1
  }. ${createDate.getDate()}`;

  const timeDifference = getTimeDifference(createDate, currentDate);

  return (
    <div className="Card">
      <div className="card-image-container">
        <img
          src={cardImage ? cardImage : SAMPLE_IMAGE_URL}
          alt="cardImage"
          className="card-image"
        />
      </div>
      <div className="card-txt">
        <div className="font-thin font-13px" style={{ color: "#666666" }}>
          {timeDifference}
        </div>
        <div className="card-contents font-thin font-16px">
          {cardDescription}
        </div>
        <div className=" font-thin font-14px" style={{ color: "#333333" }}>
          {createDateString}
        </div>
      </div>
    </div>
  );
};

export default Card;
