import style from "./CardListItem.module.css";
import { getTimeAgo, formatDate } from "util/time";
import noImg from "assets/noImg.png";

function CardListItem({ link }) {
  return (
    <a href={link.url} target="_blank" className={style["l_col"]}>
      <div className={style.link}>
        <div className={style["link-cover"]}>
          <img src={link.imageSource || noImg} alt="card-cover" />:
        </div>
        <div className={style["link-contents"]}>
          <p className={style["link-update"]}>{getTimeAgo(link.createdAt)}</p>
          <h2 className={style["link-title"]}>{link.title}</h2>
          <p className={style["link-description"]}>{link.description}</p>
          <p className={style["link-date"]}>{formatDate(link.createdAt)}</p>
        </div>
      </div>
    </a>
  );
}

export default CardListItem;
