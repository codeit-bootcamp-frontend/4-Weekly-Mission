import timeAgo from "./util/timeAgo.js";
import date from "./util/date.js";
import baseImg from "../assets/png/base.png";
import "./CardListItem.css";

function CardListItem({ item }) {
  const formatDate = date(item.createdAt);

  return (
    <a className="card_list_item" href={item.url} target="_blank" rel="noreferrer noopener">
      <div className="img_area">
        <img src={item.imageSource || baseImg} alt="" />
      </div>
      <div className="text_area">
        <p className="time">{timeAgo(formatDate)}</p>
        <p className="description">{item.description}</p>
        <p className="created_at">{formatDate}</p>
      </div>
    </a>
  );
}

export default CardListItem;
