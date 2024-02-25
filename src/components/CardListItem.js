import timeAgo from "./util/timeAgo.js";
import date from "./util/date.js";
import baseImg from "../assets/png/base.png";
import star from "../assets/svg/star.svg";
import kebab from "../assets/svg/kebab.svg";
import "./CardListItem.css";

function CardListItem({ item }) {
  const formatDate = date(item.createdAt || item.created_at);

  return (
    <a className="card_list_item" href={item.url} target="_blank" rel="noreferrer noopener">
      <div className="img_area">
        <img className="img_main" src={item.imageSource || baseImg} alt="" />
        <img className="img_star" src={star} alt="" />
      </div>
      <div className="text_area">
        <div className="time_kebab">
          <p className="time">{timeAgo(formatDate)}</p>
          <img src={kebab} alt="" />
        </div>
        <p className="description">{item.description}</p>
        <p className="created_at">{formatDate}</p>
      </div>
    </a>
  );
}

export default CardListItem;
