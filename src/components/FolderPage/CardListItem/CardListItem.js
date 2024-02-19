import style from "./CardListItem.module.css";
import { getTimeAgo, formatDate } from "util/time";
import noImg from "assets/noImg.png";
import starImg from "assets/Star 1.svg";
import kebabImg from "assets/kebab.svg";

function CardListItem({ link }) {
  return (
    <a href={link.url} target="_blank" className={style["l_col"]}>
      <div className={style.link}>
        <div className={style["link-cover"]}>
          <img src={link.image_source || noImg} alt="card-cover" />:
        </div>
        <button className={style["star-btn"]}>
          <img src={starImg} />
        </button>
        <div className={style["link-contents"]}>
          <div className={style["content-Header"]}>
            <p className={style["link-update"]}>
              {getTimeAgo(link.created_at)}
            </p>
            <button className={style["kebab-btn"]}>
              <img src={kebabImg} />
            </button>
          </div>
          <h2 className={style["link-title"]}>{link.title || "NAN"}</h2>
          <p className={style["link-description"]}>{link.description}</p>
          <p className={style["link-date"]}>{formatDate(link.created_at)}</p>
        </div>
      </div>
    </a>
  );
}

export default CardListItem;
