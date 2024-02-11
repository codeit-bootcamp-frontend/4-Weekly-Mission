import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
} from "date-fns";
import noImage from "../../assets/img/png/no-image.png";

function formatDate(createdAt) {
  const currentTime = new Date();
  const createdAtTime = new Date(createdAt);

  const time = createdAt.substring(0, 10);
  // 날짜 차이 계산 후 -->

  // 밀리초를 분으로 변환
  const minutesDifference = differenceInMinutes(currentTime, createdAtTime);

  // 밀리초를 시간으로 변환
  const hoursDifference = differenceInHours(currentTime, createdAtTime);

  // 밀리초를 날짜로 변환
  const daysDifference = differenceInDays(currentTime, createdAtTime);

  // 밀리초를 달로 변환
  const monthsDifference = differenceInMonths(currentTime, createdAtTime);

  let relativeTime = "";

  if (minutesDifference < 2) {
    relativeTime = `1 minute ago`;
  } else if (minutesDifference <= 59) {
    relativeTime = `${minutesDifference} minutes ago`;
  } else if (minutesDifference >= 60) {
    relativeTime = `1 hour ago`;
  }
  if (hoursDifference <= 23) {
    relativeTime = `${hoursDifference} hours ago`;
  } else if (hoursDifference >= 24) {
    relativeTime = `1 day ago`;
  }
  if (daysDifference <= 30) {
    relativeTime = `${daysDifference} days ago`;
  } else if (daysDifference >= 31) {
    relativeTime = `1 month ago`;
  }
  if (monthsDifference <= 11) {
    relativeTime = `${monthsDifference} months ago`;
  } else if (monthsDifference >= 12) {
    relativeTime = `1 year ago`;
  } else {
    relativeTime = `${Math.floor(monthsDifference / 12)} years ago`;
  }
  return { relativeTime: relativeTime, time: time };
}

function LinkContainer({ link, onHover, onMouseOut, isHover }) {
  return (
    <a
      className="link-grid-element"
      target="_blank"
      rel="noopener noreferrer"
      onMouseOver={onHover}
      onMouseOut={onMouseOut}
      href={link.url}
    >
      <div className="link-image-container">
        <img
          className={`link-image-sizing ${
            link.id === isHover ? "link-size-up" : ""
          }`}
          src={link.imageSource || noImage}
          alt={link.imageSource || "no-Image"}
        />
      </div>

      <div className="link-grid-div">
        <div>{formatDate(link.createdAt).relativeTime}</div>
        <div>{link.title}</div>
        <div>{formatDate(link.createdAt).time}</div>
      </div>
    </a>
  );
}

export default LinkContainer;
