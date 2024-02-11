import { getTimeDifferenceMessage, getDateText } from "../utils/getTimeText";
import "./Card.css";

export default function Card({ link }) {
  const parsingDate = new Date(link.createdAt);
  const timeDifference = Date.now() - parsingDate;
  const date = getDateText(parsingDate);
  const timeDifferenceMessage = getTimeDifferenceMessage(timeDifference);

  return (
    <a
      className="card-container"
      type="button"
      href={link.url}
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="card-image-wrapper">
        <img className="card-image" src={link.imageSource} alt="link-preview" />
      </div>
      <div className="card-description">
        <span className="post-time">{timeDifferenceMessage}</span>
        <h4 className="post-preview">{link.title}</h4>
        <span className="post-date">{date}</span>
      </div>
    </a>
  );
}
