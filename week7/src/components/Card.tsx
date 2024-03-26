import "./Card.css";
import { useMediaQuery } from "react-responsive";
import noImg from "../assets/noImage.png";
import kebab from "../assets/kebab.png";
import { Link } from "../SharedPage";

type CardProps = {
  links: Link[];
};
type CardItemsProps = {
  link: Link;
  url: string;
};
function Card({ links }: CardProps) {
  const isTablet = useMediaQuery({ maxWidth: 1124 });

  const formatDate = (value: string) => {
    const date = new Date(value);
    const now = new Date();

    const minuteInMillis = 60 * 1000;
    const hourInMillis = 60 * minuteInMillis;
    const dayInMillis = 24 * hourInMillis;
    const monthInMillis = 30 * dayInMillis;

    const elapsedMillis: number = Number(now) - Number(date);

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
  const getFormatDate = (createdAt: string) => {
    const date = new Date(createdAt);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  const CardItem = ({ link, url }: CardItemsProps) => {
    const timeStamp = new Date(link.createdAt).getTime();
    return (
      <a className="card-url" href={url} target="_blank" rel="noreferrer">
        {link.imageSource ? (
          <img
            className="card-image"
            src={link.imageSource}
            alt="카드 이미지"
          />
        ) : (
          <img src={noImg} />
        )}
        <div className="date-and-kebab">
          <p>{formatDate(timeStamp.toString())}</p>
          <img className="kebab" src={kebab} />
        </div>
        <p className="title">{link.title}</p>
        <p className="description">{link.description}</p>
        <p>{getFormatDate(link.createdAt.toString())}</p>
      </a>
    );
  };
  const linksArray = links || [];
  return (
    <article className={isTablet ? "article-box-tablet" : "article-box"}>
      <div className={isTablet ? "card-container-tablet" : "card-container"}>
        {linksArray.map((link) => {
          return (
            <div className="card-box" key={link.id}>
              <CardItem link={link} url={link.url} />
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default Card;
