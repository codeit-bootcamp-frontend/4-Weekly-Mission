import "./FolderCard.css";
import { useMediaQuery } from "react-responsive";
import noImg from "../../assets/noImage.png";
import kebab from "../../assets/kebab.png";
function FolderCard({ data }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1124 });

  const formatDate = (value) => {
    const date = new Date(value);
    const now = new Date();

    const minuteInMillis = 60 * 1000;
    const hourInMillis = 60 * minuteInMillis;
    const dayInMillis = 24 * hourInMillis;
    const monthInMillis = 30 * dayInMillis;

    const elapsedMillis = now - date;

    if (elapsedMillis < minuteInMillis) {
      const minutes = Math.floor(elapsedMillis / 1000 / 60);
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (elapsedMillis <= hourInMillis) {
      const hours = Math.floor(elapsedMillis / 1000 / 60 / 60);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (elapsedMillis <= dayInMillis) {
      const hours = Math.floor(elapsedMillis / 1000 / 60 / 60);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (elapsedMillis <= monthInMillis) {
      const days = Math.floor(elapsedMillis / 1000 / 60 / 60 / 24);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (elapsedMillis <= 11 * monthInMillis) {
      const months = Math.floor(elapsedMillis / 1000 / 60 / 60 / 24 / 30);
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (elapsedMillis <= 12 * monthInMillis) {
      return "1 year ago";
    } else {
      const years = Math.floor(elapsedMillis / 1000 / 60 / 60 / 24 / 30 / 12);
      return `${years} year${years > 1 ? "s" : ""} ago`;
    }
  };
  const getFormatDate = (createdAt) => {
    const date = new Date(createdAt);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  const CardItem = ({ link, url }) => {
    const timeStamp = new Date(link.created_at).getTime();

    return (
      <a className="folder-card-url" href={url} target="_blank">
        {link.image_source ? (
          <img
            className="folder-card-image"
            src={link.image_source}
            alt="카드 이미지"
          />
        ) : (
          <img src={noImg} />
        )}
        <div className="date-and-kebab">
          <p>{formatDate(timeStamp)}</p>
          <img className="kebab" src={kebab} />
        </div>
        <p className="folder-title">{link.title}</p>
        <p className="folder-description">{link.description}</p>
        <p>{getFormatDate(link.created_at)}</p>
      </a>
    );
  };
  const dataArray = data || [];

  return (
    <article
      className={isTablet ? "folder-article-box-tablet" : "folder-article-box"}
    >
      <div
        className={
          isMobile
            ? "folder-card-container-mobile"
            : isTablet
            ? "folder-card-container-tablet"
            : "folder-card-container"
        }
      >
        {dataArray.length ? (
          dataArray.map((data) => {
            return (
              <div className="folder-card-box" key={data.id}>
                <CardItem link={data} url={data.url} />
              </div>
            );
          })
        ) : (
          <h1>저장된 링크가 없습니다.</h1>
        )}
      </div>
    </article>
  );
}

export default FolderCard;
