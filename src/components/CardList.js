import "./CardList.css";
import star_icon from "../assets/star.svg";
import kebab_icon from "../assets/kebab.svg";

export default function CardList({ url, createdAt, desc, imgUrl }) {
  const linkUrl = () => {
    window.open(url);
  };

  const formattedDate = new Date(createdAt)
    .toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\./g, ". ");

  const timeAgo = (createdAt) => {
    const currentTime = new Date();
    const createdTime = new Date(createdAt);
    const timeDiff = Math.abs(currentTime - createdTime);
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = month * 12;

    if (timeDiff < minute * 2) {
      return "1 minute ago";
    } else if (timeDiff < hour) {
      return Math.floor(timeDiff / minute) + " minutes ago";
    } else if (timeDiff < day) {
      return Math.floor(timeDiff / hour) + " hours ago";
    } else if (timeDiff < month) {
      return Math.floor(timeDiff / day) + " days ago";
    } else if (timeDiff < year) {
      return Math.floor(timeDiff / month) + " months ago";
    } else {
      return Math.floor(timeDiff / year) + " years ago";
    }
  };

  return (
    <div className="CardList" onClick={linkUrl}>
      <img id="cardImg" src={imgUrl} alt="카드 리스트별 이미지" />
      <img id="starIcon" src={star_icon} alt="별 모양 버튼" />
      <div id="textarea">
        <div id="timeAgoFrame">
          <span id="timeOut">{timeAgo(createdAt)}</span>
          <img id="kebabIcon" src={kebab_icon} alt="케밥 버튼" />
        </div>
        <p id="description">{desc}</p>
        <p id="createdAt">{formattedDate}</p>
      </div>
    </div>
  );
}
