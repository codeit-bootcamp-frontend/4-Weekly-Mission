import { getFormattedDate, getTimeAgo } from "../util/date.js";
import noImage from "../images/noImage.svg";
import kebab from "../images/kebab.svg";
import emptyStar from "../images/emptyStar.svg";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  const defaultImage = noImage;
  return (
    <Link
      to={data.url}
      target="_blank"
      rel="noopener noreferrer"
      className="cardBox"
    >
      <div className="cardImgBox">
        <img
          className="cardImg"
          src={data.image_source || defaultImage}
          alt="카드썸네일"
        />
      </div>
      <img className="cardStar" src={emptyStar} alt="빈 별" />
      <div className="cardData">
        <div className="cardTimeAgo">
          <p>{getTimeAgo(data.created_at)}</p>
          <img src={kebab} alt="케밥" />
        </div>
        <div className="cardInfo">{data.description || "No Description"}</div>
        <div className="cardCreatedAt">{getFormattedDate(data.created_at)}</div>
      </div>
    </Link>
  );
}
